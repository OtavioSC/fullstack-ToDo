import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { UPDATE_TASK, GET_TASKS } from "../../graphql/Queries";
import { dateFormatList } from "../Formpage/Form/Form";
import "./index.css";

export default function Editpage() {
  const [idEdit, setIdDel] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const [updateTask] = useMutation(UPDATE_TASK);
  const { refetch } = useQuery(GET_TASKS);

  return (
    <section className="container">
      <h1 className="title"> Edit a task 🎨</h1>
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
            placeholder="title"
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
            placeholder="description"
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

        <Form.Item label="Duration" name="duration">
          <Input
            placeholder="duration"
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
              updateTask({
                variables: {
                  taskInput: {
                    title,
                    description,
                    date,
                    duration,
                  },
                  id: idEdit,
                },
              });
              refetch();
            }}
            type="primary"
          >
            Edit task
          </Button>
          <Link to="/">
            <Button style={{ marginLeft: 40 }}>View all tasks</Button>
          </Link>
        </Form.Item>
      </Form>
    </section>
  );
}
