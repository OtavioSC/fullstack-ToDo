import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query {
    tasks {
      _id
      title
      description
      duration
      date
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: String!) {
    deleteTask(id: $id) {
      _id
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($taskInput: TaskInput!) {
    createTask(taskInput: $taskInput) {
      title
      description
      date
      duration
    }
  }
`;

// export const UPDATE_TASK = gql`
//   mutation () {
//     updateTask() {
//       id
//       name
//     }
//   }
// `;

// export const DELETE_TASK = gql`
//   mutation ($id: String!) {
//     deleteTask(id: $id) {
//       name
//     }
//   }
// `;
