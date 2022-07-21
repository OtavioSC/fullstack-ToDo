import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import React from "react";

import { GET_TASKS } from "../../../graphql/Queries";
import { useQuery } from "@apollo/client";

import "./Table.css";

export default function MyTable() {
  const getTasks = useQuery(GET_TASKS);

  const columns = [
    {
      title: "id",
      dataIndex: "_id",
      key: "id",
      width: "20%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "20%",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "20%",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      width: "20%",
    },
  ];
  return (
    <section className="container">
      <h2 className="title"> Your Tasks 💻</h2>
      <Link to="/form">
        <Button type="primary" style={{ marginBottom: 16 }}>
          Create task
        </Button>
      </Link>
      <Link to="/edit">
        <Button type="dashed" style={{ marginBottom: 16, marginLeft: 10 }}>
          Edit task
        </Button>
      </Link>
      <Link to="/delete">
        <Button type="danger" style={{ marginBottom: 16, marginLeft: 10 }}>
          Delete task
        </Button>
      </Link>
      <Table
        bordered={true}
        columns={columns}
        dataSource={!getTasks.loading ? getTasks.data.tasks : ["No data"]}
        pagination={{ pageSize: 6 }}
        size="small"
        align="center"
      />
    </section>
  );
}
