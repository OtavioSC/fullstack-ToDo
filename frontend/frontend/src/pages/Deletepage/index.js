import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { GET_TASKS, DELETE_TASK } from "../../graphql/Queries";
import "./index.css";

export default function Deletepage() {
  const [idDel, setIdDel] = useState("");
  const [deleteTask] = useMutation(DELETE_TASK);
  const { refetch } = useQuery(GET_TASKS);
  return (
    <section className="container">
      <h1 className="title"> Delete your task ❌</h1>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: "Please input an id to your delete the task!",
            },
          ]}
        >
          <Input
            placeholder="id"
            onChange={(e) => {
              setIdDel(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            htmlType="submit"
            onClick={(e) => {
              e.preventDefault();
              deleteTask({
                variables: {
                  id: idDel,
                },
              });
              refetch();
            }}
            type="danger"
          >
            Delete
          </Button>
          <Link to="/">
            <Button style={{ marginLeft: 40 }}>View all tasks</Button>
          </Link>
        </Form.Item>
      </Form>
    </section>
  );
}
