# Producto 4 : Trabajando en tiempo real de forma colaborativa

## Descripción

Finalizamos nuestro proyecto implementando los mecanismos para el trabajo colaborativo mediante la comunicación en tiempo real de datos por la subscripción a estos con la incorporación de un sistema de Pull/Push a través de websockets y PubSub


## Objetivos Event personal
#### 1. Conocer websockets para poder trabajar de forma colaborativa dentro de uno de los interfaces.
#### 2. Conocer e implementar las suscripciones a datos mediante GraphQL. 

## Pasos
    1. Leer detenidamente estas instrucciones e identificar los requerimientos de la actividad.
    2. Revisar detenidamente la rúbrica de evaluación.
    3. Consultar los recursos necesarios facilitados en el aula.
    4. Crear un nuevo repositorio nuevo en Github en el que se incluya al consultor y al equipo. Para cada producto se tendrá que crear un github independiente, nunca se trabajará en el mismo para que de tiempo al consultor de corregir el trabajo sin que ya se vaya adelantando código del siguiente producto. Además, en el gitignore se tiene que indicar que la carpeta node_modules no estará incluida
    5. Instalar los siguientes paquetes a través de npm:
        subscriptions-tranport-ws
        apollo-server-express 
    6. Crear una nueva instancia de la clase PubSub que está relacionado con ApolloServer para tener incluido dentro de este la posibilidad de publicar/subscribir. Se aconseja realizar esta acción a través de un nuevo módulo pubsub.js
        const { PubSub } = require('apollo-server-express')
        const pubsub = new PubSub()
        module.exports = pubsub
    7. Se va a mantener las queries y mutations anteriores a través del canal HTTP y se crearán las nuevas suscripciones mediante pubsub/websockets. Para ello se lanzará las suscripciones a través de: 
        const app = express()
        const httpServer = createServer(app)
        server.installSubscriptionHandlers(httpServer)
    8. Generar al menos una Subscription y Resolver. En el caso del ejemplo usado ToDoList realizaremos la suscripción al drap&drop de las tareas
    9. Implementar en el frontal el API Drag&Drop. En el caso del proyecto ejemplo ToDoList se implementaría a través del movimiento de las tarjetas/tareas tal y como se observa en la anterior tabla.
    10. Implementar en el Frontend los mecanismos para suscribirse a esta implementación.

## Rúbrica
    1: Servicio Web GraphQL (8 pts)
    Se ha implementado una API GraphQL con ExpressJS de manera completa, y se utilizan los mecanismos de Pub/Sub correctamente. Existent tipos de datos personalizados como Actividad, Usuario, etc.

    2: websocket (8 pts)
    El uso de websockets es correcto y está vinculado con la Pub/Sub. Los datos que se envian y reciben estan en JSON.

    3: API HTML5 Drag&Drop (8 pts)
    Se ha utilizado D&D de manera correcta, utilizando más de dos mètodos y haciendo uso de propiedades como la personalización del icono de arrastre entre otros.