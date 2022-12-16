const mongoose = require('mongoose'); // Llamada a mongoose
const Schema = mongoose.Schema;   //Creación del Schema

const PanelesSchema = new Schema({
    _id: Number,
    titulo: String,
    descripcion: String,
})

const Panel = mongoose.model('Panel', PanelesSchema);

module.exports = Panel;
