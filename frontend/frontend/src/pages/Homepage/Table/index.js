import { Link } from "react-router-dom";
import { Button, Table, Input } from "antd";
import React from "react";

import { GET_TASKS } from "../../../graphql/Queries";
import { useQuery } from "@apollo/client";

import "./index.css";

export default function MyTable() {
  const { data, loading } = useQuery(GET_TASKS);
  const { Search } = Input;

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
      <Search
        placeholder="Search a task"
        style={{ marginBottom: 16 }}
        loading={true}
      />
      <Link to="/create">
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
        dataSource={!loading ? data.tasks : ["nothing"]}
        rowKey={(record) => record.uid}
        pagination={{ pageSize: 6 }}
        size="small"
        align="center"
      />
    </section>
  );
}
