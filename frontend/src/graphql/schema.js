import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query {
    tasks {
      name
      description
      duration
      date
    }
  }
`;

export const CREATE_TASK = gql`
  mutation () {
    createTask() {
      id
      name
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation () {
    updateTask() {
      id
      name
    }
  }
`;

export const DELETE_TASK = gql`
  mutation ($id: String!) {
    deleteTask(id: $id) {
      name
    }
  }
`;
