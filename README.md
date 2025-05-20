To Do List - Actividad Unidad IV (Métodos HTTP REST)
_______________________________________________________________________________________________________

Descripción
Esta es una aplicación backend construida con **Node.js** y **Express.js** para gestionar tareas y metas personales (To Do List). 
La actividad forma parte de la Unidad IV del curso y tiene como objetivo implementar respuestas HTTP adecuadas y seguridad básica mediante un middleware de autorización.

____________________________________________________________________________________________________________________________________________________________________________
Tecnologías usadas
- Node.js (versión LTS recomendada)
- Express.js
- Jade (como motor de vistas)
- Morgan (para logs)
- Cookie-parser
- HTTP-errors
  ___________________________________________________________________________________________________________________

Funcionalidades

- Agregar tareas/metas con título y fecha límite.
- Listar todas las tareas.
- Eliminar tareas por ID.
- Middleware de autorización por API Key.
- Manejo de códigos de estado HTTP:
  - `200 OK` para respuestas exitosas.
  - `400 Bad Request` para errores de validación.
  - `401 Unauthorized` si no se envía o es incorrecta la API Key.

____________________________________________________________________________________________________________________________

Seguridad: Middleware de autorización

Todas las rutas requieren una **API Key** válida en el header:
_____________________________________________________________________________________________________________________________

Authorization: 123

> Si no se proporciona o es incorrecta, el servidor responderá con código `401 Unauthorized`.

_____________________________________________________________________________________________________________________

Instrucciones para ejecutar:

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/todolist-api.git
cd todolist-api
________________________________________________________________________________________________

Instala las dependencias:
npm install
___________________________________________________________________________
Ejecuta el servidor:
npm start
El servidor se ejecutará en: http://localhost:3000
_______________________________________________________________________________________
Endpoints disponibles
Método	Ruta	Descripción
GET	/tasks	Listar todas las tareas
POST	/tasks	Crear una nueva tarea
DELETE	/tasks/:id	Eliminar tarea por ID

