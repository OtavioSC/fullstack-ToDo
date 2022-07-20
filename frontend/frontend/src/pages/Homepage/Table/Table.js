import { Button, Input, Space, Table, Typography, Popconfirm } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

import { DELETE_TASK, GET_TASKS } from "../../../graphql/Queries";
import { useMutation, useQuery } from "@apollo/client";

import "./Table.css";

const dados = [];

export default function MyTable() {
  const { data, loading } = useQuery(GET_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "id",
      width: "20%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
      ...getColumnSearchProps("name"),
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
      width: "10%",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      width: "20%",
    },
    {
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              // onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?">
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <button>Edit</button>
        );
      },
    },
    {
      dataIndex: "",
      key: "x",
      render: () => (
        <button
          onClick={(e) => {
            deleteTask({ variables: { type: "62d6f5f5eccae5b0325323db" } });
          }}
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <section className="container">
      <Table columns={columns} dataSource={!loading ? data.tasks : dados} />
    </section>
  );
}
