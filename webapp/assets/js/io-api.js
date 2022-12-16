const socket = io();

class ioAPI {
    static init() {
        ioAPI.onTaskNotification()
        ioAPI.onError()
    }

    static onTaskNotification() {
        socket.on('taskNotification', (message) => {
            console.log('./taskNotification', message);
            alertify.success(message);
        });
    }

    static onError() {
        socket.on('error', (message) => {
            console.log('./server error', message);
            alertify.error(`server error: ${message}`);
        });
    }

    static addTarea(id, tarea) {
        socket.emit('addTarea', { id, tarea });
    }

    static uploadTareaFile(file, fileName) {
        socket.emit('uploadTareaFile', { file, fileName }, (status) => {
            console.log('./status', status);
        });
    }

    static deleteTarea(id) {
        socket.emit('deleteTarea', id);
    }

    static addPanel(panel) {
        socket.emit('addPanel', panel);
    }

    static deletePanel(id) {
        socket.emit('deletePanel', id);
    }

    static modifyTarea(id, tarea) {
        socket.emit('modifyTarea', { id, tarea });
    }

    static modifyPanel(id, panel) {
        socket.emit('modifyPanel', { id, panel });
    }
}

ioAPI.init()

window.ioAPI = ioAPI
