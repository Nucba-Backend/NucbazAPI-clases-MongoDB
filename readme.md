En esta clase vamos a iniciar un proyecto que durará 4 clases.

Es una API con la que el alumno está parcialmente familiarizado ya que se utilizó una API similar en el proyecto final del módulo de React.

PARA ESTE PROYECTO RECOMENDAMOS IR AL RITMO QUE SEA NECESARIO PARA PODER PROBAR TODAS LAS VARIANTES Y ERRORES MEDIANTE CONSOLE.LOG() Y LA AYUDA DE POSTMAN

Tener en cuenta que, en el package.json, as dependencias ya están instaladas. Sería ideal que fueran instalandose a medida que sean necesarias.


Para esta clase, se recomiendan los siguientes pasos:

-Inicial el proyecto con los comandos de NPM y TSC. No olvidarse de configurar correctamente el tsconfig.

-Crear el app.ts.

-Crear el modelo del Server sin las rutas e instanciarlo en el app.ts

-Al utilizar variables de entorno en el Server, hablar sobre dotenv y realizar la configuracion en el app.ts.

-Crear el modelo de Usuario, con las siguientes aclaraciones:

  *Crearemos un objeto "ROLES" para no realizar comparacion con strings literales.

  *El campo "code" es porque crearemos un código que enviaremos por mail para que el usuario pueda verificarse.

-Armar en el modelo de Server lo referente a la ruta "auth".

-Comenzar con el controlador de register simplemente creandolo y recibiendo la data enviada por el usuario.

-Introducir el concepto de middleware y crear los middlewares necesarios en la ruta.

-Hacer notar los status code

-Terminar de armar el controlador de register realizando console.log() cuando sea necesario para otorgarle ayuda visual al alumno.

-Hacer hincapié en cómo llegan los headers, creacion de crypt y qué pasaría si queda algún error sin controlar.

-Hacer notar que aún nos falta crear el código y enviar el mail con el código, lo cual haremos la siguiente clase.

ACLARACION IMPORTANTE: SI POR MOTIVOS DE TIEMPO, NO SE LLEGA A COMPLETAR TODO EL CODIGO ESTA CLASE, NO HAY PROBLEMA. QUEDAN DOS CLASES MAS PARA TERMINAR LA API Y UNA EXTRA DE INTEGRACION. PRIORIZAREMOS EL ENTENDIMIENTO DEL ALUMNO POR SOBRE LA CANTIDAD DE TEMAS DADOS EN CADA CLASE


Se adjunta documentación de la API completa generada por postman:
https://documenter.getpostman.com/view/24605289/2s93z9aMot
