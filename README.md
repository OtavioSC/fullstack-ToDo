<div id="top"></div>

<br />
<div align="center">
     <h1> Fullstack To Do List Application <h1>
          <img src="https://i.imgur.com/UfC8XJJ.png"></img>
  </p>
</div>

## Stack
  - [x] [Typescript](https://www.typescriptlang.org/)
  - [x] [MongoDB](https://www.mongodb.com/)
  - [x] [GraphQL](https://nodejs.org/en/)
  - [x] [Apollo Server](https://www.apollographql.com)
  - [x] [Type-graqhql](https://typegraphql.com/)
  - [x] [Node.js](https://nodejs.org/en/)
  - [x] [React.js](https://reactjs.org)
  - [x] [Ant Design](https://ant.design/)

## How to run Backend
    // Install all dependencies
    yarn install
    
    // Create a valid .env with mongodb connection
    cp env-example.txt .env
    
    // Run project
    yarn run start
    
    // API URL
    http://localhost:4001

## How to run Frontend
    // Install all dependencies
    yarn install
    
    // Run project
    yarn run start
    
    // API URL
    http://localhost:3000
    
## Files architecture
```
.
├── backend/
│   └── src/
│       ├── database/
│       │   └── connection.ts
│       ├── graphql/
│       │   └── schema.gql
│       ├── models/
│       │   ├── Task.ts
│       │   └── TaskSchema.ts
│       ├── resolvers/
│       │   └── TaskResolver.ts
│       └── server.ts
└── froentend/
    └── frontend/
        ├── public/
        └── src/
            ├── graphql/
            │   └── Queries.js
            ├── lib/
            │   └── apollo.js        
            ├── pages/
            │   ├── Deletepage/
            │   │   ├── index.css
            │   │   └── index.js     
            │   ├── Editpage/
            │   │   ├── index.css
            │   │   └── index.js 
            │   ├── Formpage/
            │   │   ├── Form/
            │   │   │   ├── Form.css
            │   │   │   └── Form.js
            │   │   └── index.js
            │   └── Homepage/
            │       ├── Table
            │       │   ├── Table.css
            │       │   └── Table.js
            │       └── index.js
            ├── App.js
            ├── App.css
            ├── Index.js
            ├── Index.js
            └── routes.js
```            

## Pipeline
### Backend
  - [x] GraphQL Schema
  - [x] CREATE Mutation
  - [x] Update Mutation
  - [x] Delete Mutation
  - [x] FindAll Query
  - [x] FindById Query
  - [ ] Authentication
### Frontend
  - [x] Homepage
  - [x] Create Task page
  - [x] Update Task page
  - [x] Delete Task page
  - [x] Ant Design System
  - [x] Apollo Client connection
  - [x] Task visualization
  - [ ] Data validation
  - [ ] Task visualization by day, month and year
  - [ ] Search field by task title
### Database
  - [x] MongoDB Connection
### Docs
  - [ ] Docusaurus
  
  
## Queries
### Task
- Get all tasks
```gql
query {
  tasks {
    _id
    title
    description
    date
    duration
    createdAt
  }
}
```
- Get task by id
```gql
query {
  task(id: "") {
    _id
    title
    description
    date
    duration
    createdAt
  }
}
```
## Mutations
### Task
- Create task
```gql
mutation {
  createTask(taskInput: {
    title: ""
    description: ""
    date: ""
    duration: ""
  }) {
    _id
    title
    description
    date
    duration
    createdAt
  }
}
```

- Update task
```gql
mutation {
  updateTask(taskInput: {
    title: ""
    description: ""
    date: ""
    duration: ""
  }, id: "") {
    _id
    title
    description
    date
    duration
    createdAt
  }
}
```

- Delete task
```gql
mutation {
  deleteTask(id: "") {
    _id
    title
    description
    date
    duration
    createdAt
  }
}
```

## Contact

[Twitter](https://twitter.com/otascar)

[Website](https://ocarmo.dev)

