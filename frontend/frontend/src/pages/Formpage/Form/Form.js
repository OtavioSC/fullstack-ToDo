import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { CREATE_TASK, GET_TASKS } from "../../../graphql/Queries";
import "./Form.css";

export const dateFormatList = "YYYY-MM-DD HH:mm:ss";

export default function MyForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const [createTask] = useMutation(CREATE_TASK);
  const { refetch } = useQuery(GET_TASKS);

  return (
    <section className="container">
      <h1 className="title"> Create a new task 💻</h1>
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
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input a title to your task!",
            },
          ]}
        >
          <Input
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input some description",
            },
          ]}
        >
          <Input
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker
            showTime
            onChange={(_, dateString) => setDate(dateString)}
            format={dateFormatList}
          />
        </Form.Item>

        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Duration"
            onChange={(e) => {
              setDuration(e.target.value);
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
              createTask({
                variables: {
                  taskInput: {
                    title,
                    description,
                    date,
                    duration,
                  },
                },
              });
              refetch();
            }}
            type="primary"
          >
            Create task
          </Button>
          <Link to="/">
            <Button style={{ marginLeft: 40 }}>View all tasks</Button>
          </Link>
        </Form.Item>
      </Form>
    </section>
  );
}
