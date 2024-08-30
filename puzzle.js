// Snippets de código para poder componer el programa

//Usado?: YES
  const middlewares = require('./middlewares');
//--- Explicación: requerimos middlewares en app.js 

// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación: requerir body-parser (app.js) para procesar los datos de solicitudes HTTP, como JSON o datos de formulario. Permite acceder a los datos del cuerpo de la solicitud

// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación: se utiliza express-session para gestionar sesiones en la aplicación (app.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
const express = require('express');
//--- Explicación: se utiliza para llamar a express en app.js

// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación: requerimos body-parser para usarlo en la configuración de middlewares (middlewares.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación: se utiliza express-session para gestionar sesiones en los middlewares (middlewares.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación: requerimos dotenv para cargar variables de entorno desde un archivo .env (app.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
const middlewares = require('./middlewares');
//--- Explicación: requerimos el archivo middlewares.js para usar sus funciones en routes.js

// -------------------------------------------------------------------------------------

//Usado?: YES
const routes = require('./routes');
//--- Explicación: Requerido en app.js

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación: Invocamos a dotenv para cargar las variables de entorno definidas en el archivo .env (app.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
const app = express();
//--- Explicación: invocamos express para crear la aplicación (app.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
const PORT = 4000;
//--- Explicación: variable en la que guardamos el puerto (app.js)

// ---------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación: requerimos dotenv para manejar variables de entorno en middlewares.js

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación: invocamos dotenv para cargar variables de entorno desde .env en middlewares.js

// -------------------------------------------------------------------------------------

//Usado?: YES
middlewares.setupApp(app); // SERÍA --> middlewares.setupAPP(app); con las dos P en mayúscula
//--- Explicación: llamamos a la función setupAPP desde middlewares.js para configurar middlewares adicionales en app.js

// -------------------------------------------------------------------------------------

//Usado?: YES
routes.setup(app);
//--- Explicación: llamamos a la función setup desde routes.js para configurar las rutas en la aplicación (app.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: función middleware que valida si la palabra ingresada es correcta, y la guarda en la sesión si lo es (middlewares.js)


// -------------------------------------------------------------------------------------


//Usado?: YES
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: ruta para la página de inicio, muestra un formulario para introducir la palabra secreta y maneja posibles errores (routes.js)


// -------------------------------------------------------------------------------------


//Usado?: YES
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: Usado dentro de la variable anterior "const setup" (routes.js)


// -------------------------------------------------------------------------------------

//Usado?: YES
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: función para configurar los middlewares de body-parser y express-session en la aplicación (middlewares.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: ruta POST para /profile que usa el middleware validarPalabraMiddleware para verificar la palabra secreta antes de mostrar la página de perfil. Dentro de la función setup (routes.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: configuramos body-parser para procesar datos de formularios en app.js

// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: configuramos express-session con opciones para manejar las sesiones en app.js

// -------------------------------------------------------------------------------------

//Usado?: YES
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: Iniciar el servidor (app.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: función middleware que verifica si la sesión contiene la palabra secreta antes de permitir el acceso (middlewares.js)

// -------------------------------------------------------------------------------------


//Usado?: YES
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: ruta GET para /profile que usa el middleware verificarSesionMiddleware para asegurarse de que la sesión esté activa antes de mostrar la página de perfil. Dentro de la funcion setup (routes.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: ruta POST para /logout que destruye la sesión del usuario y lo redirige a la página de inicio. Dentro de la funcion setup (routes.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  setup,
};
//--- Explicación: Exportar la función (routes.js)

// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación: exportamos funciones (middlewares.js)
// -------------------------------------------------------------------------------------

