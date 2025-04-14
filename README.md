# 🎮 Gamify Life – Backend

API RESTful para una aplicación web gamificada que convierte los objetivos personales y profesionales en un sistema de niveles y recompensas.

> Este proyecto forma parte de mi portfolio como desarrollador Full Stack.  
> Puedes consultar el frontend aquí (próximamente).

---

## 🚀 Tecnologías utilizadas

- **Node.js** + **Express**
- **MongoDB Atlas** + **Mongoose**
- **Firebase Admin SDK** (para autenticación de usuarios)
- **dotenv** para configuración por entorno
- **Nodemon** para desarrollo

---

## 📂 Estructura del proyecto

```
/gamify-life-backend
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middlewares/
│   └── config/
├── .env.example
├── .gitignore
├── package.json
```

---

## ⚙️ Configuración del entorno

1. Clona el repositorio:

```bash
git clone https://github.com/Ismaelsiten/gamify-life-backend.git
cd gamify-life-backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea tu archivo `.env` a partir del `.env.example`:

```bash
cp .env.example .env
```

4. Añade tu cadena de conexión a MongoDB y cualquier dato necesario de Firebase.

---

## 🧪 Scripts disponibles

```bash
npm run dev    # Ejecuta el servidor en modo desarrollo (nodemon)
npm start      # Ejecuta el servidor en modo producción
```

---

## 🔐 Autenticación

Las rutas están protegidas mediante tokens de Firebase.  
Para probarlas, necesitas un token válido en el header:

```http
Authorization: Bearer <tu_token_de_firebase>
```

---

## 📬 Endpoints principales

- `POST /api/games` – Crea un nuevo juego
- `GET /api/games` – Lista los juegos del usuario
- `GET /api/games/:id` – Ver un juego específico

---

## 📌 Notas

- **No subas el archivo `.env` ni las claves de Firebase al repositorio.**
- Este backend está pensado para conectarse a un frontend desarrollado en Angular.

---

## 👨‍💻 Autor

Ismael Site Nsegue  
[LinkedIn](https://www.linkedin.com/in/ismael-site-8134a4193/)

---

## 🔗 Enlaces útiles

- Firebase: [https://firebase.google.com/](https://firebase.google.com/)
- MongoDB Atlas: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Recursos en español: [gptonline.ai/es](https://gptonline.ai/es/)
# gamify-life-backend
API RESTful para una aplicación web gamificada que convierte los objetivos personales y profesionales en un sistema de niveles y recompensas. Backend desarrollado con Node.js, Express y MongoDB, con autenticación mediante Firebase Auth.

# 🎮 Gamify Life – Backend

API RESTful para una aplicación web gamificada que convierte los objetivos personales y profesionales en un sistema de niveles y recompensas.

> Este proyecto forma parte de mi portfolio como desarrollador Full Stack.  
> Puedes consultar el frontend aquí (próximamente).

---

## 🚀 Tecnologías utilizadas

- **Node.js** + **Express**
- **MongoDB Atlas** + **Mongoose**
- **Firebase Admin SDK** (para autenticación de usuarios)
- **dotenv** para configuración por entorno
- **Nodemon** para desarrollo

---

## 📂 Estructura del proyecto

```
/gamify-life-backend
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middlewares/
│   └── config/
├── .env.example
├── .gitignore
├── package.json
```

---

## ⚙️ Configuración del entorno

1. Clona el repositorio:

```bash
git clone https://github.com/Ismaelsiten/gamify-life-backend.git
cd gamify-life-backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea tu archivo `.env` a partir del `.env.example`:

```bash
cp .env.example .env
```

4. Añade tu cadena de conexión a MongoDB y cualquier dato necesario de Firebase.

---

## 🧪 Scripts disponibles

```bash
npm run dev    # Ejecuta el servidor en modo desarrollo (nodemon)
npm start      # Ejecuta el servidor en modo producción
```

---

## 🔐 Autenticación

Las rutas están protegidas mediante tokens de Firebase.  
Para probarlas, necesitas un token válido en el header:

```http
Authorization: Bearer <tu_token_de_firebase>
```

---

## 📬 Endpoints principales

- `POST /api/games` – Crea un nuevo juego
- `GET /api/games` – Lista los juegos del usuario
- `GET /api/games/:id` – Ver un juego específico

---

## 📌 Notas

- **No subas el archivo `.env` ni las claves de Firebase al repositorio.**
- Este backend está pensado para conectarse a un frontend desarrollado en Angular.

---

## 👨‍💻 Autor

Ismael Site Nsegue  
[LinkedIn](https://www.linkedin.com/in/ismael-site-8134a4193/)

---

## 🔗 Enlaces útiles

- Firebase: [https://firebase.google.com/](https://firebase.google.com/)
- MongoDB Atlas: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Recursos en español: [gptonline.ai/es](https://gptonline.ai/es/)