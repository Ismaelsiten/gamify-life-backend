import Game from '../models/game.model.js';


// Crear juegos
export const crearJuego = async (req, res) => {
  try {
    const { titulo, categoria, descripcion, niveles } = req.body;
    const usuarioUid = req.user.uid; 

    const nuevoJuego = new Game({
      titulo,
      categoria,
      descripcion,
      niveles,
      usuarioUid
    });

    await nuevoJuego.save();

    res.status(201).json({
      message: 'Juego creado correctamente',
      juego: nuevoJuego
    });
  } catch (error) {
    console.error('Error al crear juego:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};


// Obtener todos los juegos del usuario
export const obtenerJuegos = async (req, res) => {
    try {
      const usuarioUid = req.user.uid;
  
      const juegos = await Game.find({ usuarioUid });
  
      res.status(200).json({
        message: 'Juegos obtenidos correctamente',
        juegos
      });
    } catch (error) {
      console.error('Error al obtener juegos:', error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  };
  

// Obtener un  juego en concreto del usuario
export const obtenerJuegoConcreto = async (req, res) => {
    try {
      const usuarioUid = req.user.uid;
      const {id} = req.params;
  
      const juego = await Game.findOne({ _id: id, usuarioUid });

      if (!juego) {
        return res.status(404).json({ message: 'Juego no encontrado' });
      }
  
      res.status(200).json({
        message: 'Juego obtenido correctamente',
        juego
      });
    } catch (error) {
      console.error('Error al obtener juego por ID:', error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  };
  
