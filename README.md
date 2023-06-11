# Tasks-App 
Aplicativo de lado del servidor para gestionar listas de tareas con autenticacion de usuarios,
quien haga uso del aplicativo podra registrarse creando su nuevo usuario y luego iniciando sesion con estas credenciales (devolviendole el servidor un token al cliente para guardar en los headers), teniendo cada usuario su propia lista de tareas, permitiendo al usuario realizar algunos tipos de operaciones sobre su lista de tareas como poder añadir una nueva, al igual que poder consultar, editar, eliminar y dar completado a las tareas existentes 


## Instalación
1. Clona este repositorio 
https://github.com/jclentino/tasks-app.git

2. Accede a la carpeta del proyecto 
cd tasks-app

3. Eliminar el archivo package-lock.json 

4. Instala las dependencias con 
npm install --force 


## Configuración
Antes de ejecutar el proyecto, asegúrate de configurar las siguientes variables de entorno:

1. `PORT`: Puerto donde correra en tu maquina local.
2. `DATABASE_URL`: String de conexion de MongoDb.
3. `SECRET_KEY`: Palabra secreta para crear Jwon Web Tokens.


## Uso
1. Inicia el servidor local ejecutando el siguiente comando 
npm run dev

2. Abre tu navegador y visita 
http://localhost:PORT/graphql

3. A partir de aquí, puedes comenzar a ejecutar consultas y mutaciones utilizando GraphQL.

Crear usuarios: 
mutation {
  register (username: "user name", email: "useremail@gmail.com", password: "user123", displayName: "my new user")
}


Inicio de sesion (retorno de un token):
mutation {
  login (email: "useremail@gmail.com", password: "user123")
}


Consultando un usuario por su id:
query {
  user (id: "NroID"){
    id
    username
    email
    displayName
    createdAt
    updatedAt
  }
}


Consultado lista de ususarios: 
query {
  users {
    id
    username
    email
    displayName
    createdAt
    updatedAt
  }
}

Creando nuevas tareas de un usuario (Token del usuario en los headers): 
mutation {
  createTask(title: "new task", description: "new description"){
    id
    title
    description
    completed
    author {
      id
      username
      email
      displayName
    }
    createdAt
    updatedAt
  }
}


Consulta de todas las tareas:
query {
  tasks {
    id
    title
    completed
    author{
      id 
      username
      email
      displayName
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}


Consulta una tarea por su identificador:
query {
  task(id: "NroId"){
    id
    title
    description
    completed
    author {
      id
      username
      email
      displayName
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}


Modificando tarea de un usuario (Token del usuario en los headers):
mutation {
  updateTask (id: "NroId", title: "my new title", description: "my new description"){
    id
    title
    description
    completed
    author {
      id
      username
      email
      displayName
      createdAt 
      updatedAt
    }
    createdAt
    updatedAt
  }
}

Eliminando una tarea de un usuario (Token del usuario en los headers):
mutation {
  deleteTask(id:"nroid")
}


## Contribución
Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork de este repositorio https://github.com/jclentino/tasks-app.git
2. Crea una rama con tus cambios: `git checkout -b mi-rama`.
3. Realiza tus modificaciones y guarda los cambios.
4. Envía una solicitud de extracción.
