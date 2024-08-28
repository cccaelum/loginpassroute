## PUZZLE con código

Bienvenidos al puzzle de código. Como sabéis un puzzle se compone de piezas y esas piezas cuando encajan nos muestra algo. En este caso pasa lo mismo, al juntar todos los trozos del código obtendras la aplicación.

## Esta aplicación lo que hace es lo siguiente:
- Cuando entras en la ruta "/" Aparece un input para introducir una palabra. Si es correcta pasaremos a la de exito y sino dara un error y volverá el input para volver a intentarlo.

## Conociendo el fuincionamiento vamos a ver la estructura:
- `app.js`: nuestra raiz del código
- `middlewares.js`: Paso previo a las rutas
- `routes.js`: Las rutas de cada end point
- `.env`: Aqui se encuentra la palabra secreta

* Además hay un archivo `puzzle.js` en el que están todos y cada uno de los "trozos" de código que necesitarás para componerlo. Está descolocado, por tanto tendrás que coger cada trozo y llevarlo donde sea necesario. 

* Esos "trozos" tienen dos partes. 

- Una pondrá "si ya lo has usado", si es así no se puede volver a usar. Márcalo con una X o un yes.... Así llevarás un registro visual de lo que llevas y lo que te queda. 
- También hay otro apartado donde pone "explicación". Ahí deberás poner un pequeño resumen de lo que hace ese trozo de código. Podéis buscar en internet cosas que no sepáis para poder componeren la totalidad el programa.

Así más o menos podría quiedar:
//Usado?: YES
  const middlewares = require('./middlewares');
//--- Explicación: 
Almaceno en una variable lo que hay dentro del archivo 'middlewares' par apoder usarlo.
// -------------------------------------------------------------------------------------


## Sabiendo todo esto, ¿Qué tengo que hacer?
Fácil, cogeréis cada trozo de código que se dividirá entre `app.js`, `middlewares.js` y `routes.js`. Una vez hecho lanzarás lanzarás la aplicación y vermos si funciona o no ;.

## CONSEJOS
- Comienza por lo sencillo. Como inicializar el servidor, requerir express, ...
- Muxhos exports, nos da la idea de lo que puede haber dentro de cada archivo
- No te olvides de hacer `npm install` para que las dependencias se instalen en nuestro proyecto

