PARA ESTE PROYECTO RECOMENDAMOS IR AL RITMO QUE SEA NECESARIO PARA PODER PROBAR TODAS LAS VARIANTES Y ERRORES MEDIANTE CONSOLE.LOG() Y LA AYUDA DE POSTMAN

Tener en cuenta que, en el package.json, las dependencias ya están instaladas. Sería ideal que fueran instalandose a medida que sean necesarias en el transcurso de las clases.

Para esta clase, se recomiendan los siguientes pasos:

Para utilizar nodemailer se recomienda crear previamente una nueva casilla de gmail para trabajar con la misma.

-Hablar sobre nodemailer y configurar el mailer.ts.

-Aplicar en el controlador del register.

\*A tener en cuenta: Si se pone como contraseña la contraseña del mail, al querer utilizar nodemailer, el mismo arrojara un error. Es totalmente normal por seguridad de gmail. Seguir el link que nos provee el error y seguir los pasos. Básicamente, vamos a tener que habilitar la autenticacion en dos pasos y luego ir a la opcion de generar clave para aplicaciones, esta clave es la que tenemos que poner en la configuracion del mailer. Probablemente el mail que enviemos llegue a spam. Explicar que esto se debe a dos factores. El servidor del cual enviamos el mail (localhost) y el cuerpo del mismo, al cual le falta trabajo.

-Crear controlador de login para que reciba la data del usuario.

-No olvidar crear el router y middlewares necesarios. (Esto se recomienda ni bien se crea el controlador, cuando solo estamos recibiendo y, tal vez, logueando la data del front).

-Crear controlador de verifyUser.

-No olvidar crear el router y middlewares necesarios. (Esto se recomienda ni bien se crea el controlador, cuando solo estamos recibiendo y, tal vez, logueando la data del front).

SI POR ALGUN MOTIVO NO SE LLEGA A TERMINAR CON LOS TEMAS EN ESTA CLASE, QUEDA AUN UNA CLASE MAS PARA TERMINAR DE DESARROLLARLOS.
