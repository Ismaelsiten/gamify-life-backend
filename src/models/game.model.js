import mongoose from 'mongoose';

const NivelSchema = new mongoose.Schema({
  nivel: { type: Number, required: true },
  objetivo: { type: String, required: true },
  recompensa: { type: String, required: true },
  completado: { type: Boolean, default: false }
});

const GameSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  categoria: {
    type: String,
    enum: ['Formación', 'Trabajo', 'Salud', 'Otro'],
    default: 'Otro'
  },
  descripcion: { type: String },
  niveles: [NivelSchema],
  progreso: { type: Number, default: 0 },
  estado: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
  },
  usuarioUid: { type: String, required: true } 
}, {
  timestamps: true
});

const Game = mongoose.model('Game', GameSchema);
export default Game;
