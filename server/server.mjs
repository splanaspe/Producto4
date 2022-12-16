import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import { writeFile } from "fs";
import bodyParser from 'body-parser';

import { Server } from 'socket.io';


import "./config/database.mjs";
import { typeDefs } from './config/config.mjs';

import {
  panelResolver,
  addPanelResolver,
  allPanelesResolver,
  updatePanelResolver,
  deletePanelResolver,
} from './controllers/PanelController.mjs';
import {
  tareaResolver,
  addTareaResolver,
  allTareasResolver,
  updateTareaResolver,
  deleteTareaResolver,
} from './controllers/TareasController.mjs';



// se crean los resolvers
const resolvers = {
  Query: {
    hello: () => 'world',
    panel: panelResolver,
    tarea: tareaResolver,

    allPaneles: allPanelesResolver,
    allTareas: allTareasResolver,
  },

  Mutation: {
    addPanel: addPanelResolver,
    updatePanel: updatePanelResolver,
    deletePanel: deletePanelResolver,

    addTarea: addTareaResolver,
    updateTarea: updateTareaResolver,
    deleteTarea: deleteTareaResolver,
  }
}

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer);

const notifyTaskNotification = (message) => {
  io.emit('taskNotification', message);
}
const notifyError = (message) => {
  io.emit('error', message);
}

io.on('connection', (socket) => {
  console.log('a user connected');


  // panels
  socket.on('addPanel', (panel) => {
    console.log('addPanel', panel);

    try {
      addPanelResolver(null, {
        _id: +(new Date()),
        titulo: panel.title,
        descripcion: panel.description,
      })
      notifyTaskNotification('panel agregado')
    } catch (error) {
      notifyError(error.toString())
    }
  })

  socket.on('deletePanel', (id) => {
    try {
      deletePanelResolver(null, { _id: id })
      notifyTaskNotification('panel eliminado')
    } catch (error) {
      notifyError(error.toString())
    }
  })


  // tareas
  socket.on('addTarea', ({ id, tarea }) => {
    console.log('addTarea', { id, tarea });

    if (tarea.title === '0') {
      notifyError('no se puede agregar una tarea con titulo 0')
      return
    }

    try {
      addTareaResolver(null, {
        _id: id,
        titulo: tarea.title,
        descripcion: tarea.description,
        panelId: tarea.panelId,
      })
      notifyTaskNotification('tarea agregada')
    } catch (error) {
      notifyError(error.toString())
    }
  })

  socket.on('uploadTareaFile', ({ file, fileName }, callback) => {
    console.log('uploadTareaFile', file);

    try {
      writeFile(`./webapp/tmp/upload/${fileName}`, file, (err) => {
        callback({ message: err ? `failure ${err.toString()}}` : "success" });
      })

      notifyTaskNotification('archivo subido')
    } catch (error) {
      notifyError(error.toString())
    }
  })

  socket.on('deleteTarea', (id) => {
    console.log('deleteTarea', id);

    try {
      deleteTareaResolver(null, { _id: id })
      notifyTaskNotification('tarea eliminada')
    } catch (error) {
      notifyError(error.toString())
    }
  })

  socket.on('modifyTarea', ({ id, tarea }) => {
    console.log('modifyTarea', { id, tarea });

    try {
      updateTareaResolver(null, {
        _id: id,
        titulo: tarea.title,
        descripcion: tarea.description,
      })
      notifyTaskNotification('tarea modificada')
    } catch (error) {
      notifyError(error.toString())
    }
  })


  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);

app.use('/', express.static('webapp'));

await new Promise((resolve) => httpServer.listen({ port: 2000 }, resolve));
console.log(`🚀 Server ready at http://localhost:2000/pages`);
