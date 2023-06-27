PARA ESTE PROYECTO RECOMENDAMOS IR AL RITMO QUE SEA NECESARIO PARA PODER PROBAR TODAS LAS VARIANTES Y ERRORES MEDIANTE CONSOLE.LOG() Y LA AYUDA DE POSTMAN

Tener en cuenta que, en el package.json, las dependencias ya están instaladas. Sería ideal que fueran instalandose a medida que sean necesarias en el transcurso de las clases.

Esta es la última clase de creación de la API, siendo la proxima clase la de integracion con un front real.

Para esta clase, se recomiendan los siguientes pasos:

-Crear modelo de orden. Se puede tomar como referencia el POST /orders mostrado en https://nucbaz-api.vercel.app/ para mostrar a los alumnos

-Crear la ruta para las ordenes, tanto en Server como en routes. Por el momento sin middlewares. (Agregarlos luego de crear el inicio el controlador para explicar la necesidad de validar el JWT y de saber el id del usuario)

-Crear controlador para el get, luego de recibir la data, crear los middlewares en la ruta y terminar con el controlador.

-Para el controlador del post, seguir los mismos pasos.

-Crear modelo del Issue. (Esto será un "Reporte de problema" que solo pueden crear los usuarios con rol de admin)

-Crear la ruta para las issues, tanto en Server como en routes.

-Crear controlador para postear un nuevo Issue.

CON ESTOS PASOS PODEMOS DAR POR CONCLUIDA LA API EN SU TOTALIDAD. LA PROXIMA CLASE SE INTEGRARA TODO ESTO EN UN FRONT PARA CERRAR EL CONCEPTO FULLSTACK.
