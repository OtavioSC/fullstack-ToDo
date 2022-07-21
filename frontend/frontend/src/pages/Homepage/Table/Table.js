import { Link } from "react-router-dom";
import { Button, Table, Typography, Popconfirm } from "antd";
// import { SearchOutlined } from "@ant-design/icons";

import React, { useState } from "react";
// import Highlighter from "react-highlight-words";

import { DELETE_TASK, GET_TASKS } from "../../../graphql/Queries";
import { useMutation, useQuery } from "@apollo/client";

import "./Table.css";

export default function MyTable() {
  const getTasks = useQuery(GET_TASKS);
  const deleteTask = useMutation(DELETE_TASK);

  // const [searchText, setSearchText] = useState("");
  // const [searchedColumn, setSearchedColumn] = useState("");
  // const searchInput = useRef(null);

  // const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //   confirm();
  //   setSearchText(selectedKeys[0]);
  //   setSearchedColumn(dataIndex);
  // };

  // const handleReset = (clearFilters) => {
  //   clearFilters();
  //   setSearchText("");
  // };

  // const getColumnSearchProps = (dataIndex) => ({
  //   filterDropdown: ({
  //     setSelectedKeys,
  //     selectedKeys,
  //     confirm,
  //     clearFilters,
  //   }) => (
  //     <div
  //       style={{
  //         padding: 8,
  //       }}
  //     >
  //       <Input
  //         ref={searchInput}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={(e) =>
  //           setSelectedKeys(e.target.value ? [e.target.value] : [])
  //         }
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{
  //           marginBottom: 8,
  //           display: "block",
  //         }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() =>
  //             handleSearch(getTasks.data.tasks._id, confirm, dataIndex)
  //           }
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Search
  //         </Button>
  //         <Button
  //           onClick={() => clearFilters && handleReset(clearFilters)}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Reset
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             confirm({
  //               closeDropdown: false,
  //             });
  //             setSearchText(selectedKeys[0]);
  //             setSearchedColumn(dataIndex);
  //           }}
  //         >
  //           Filter
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered) => (
  //     <SearchOutlined
  //       style={{
  //         color: filtered ? "#1890ff" : undefined,
  //       }}
  //     />
  //   ),
  //   onFilter: (value, record) =>
  //     record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  //   onFilterDropdownVisibleChange: (visible) => {
  //     if (visible) {
  //       setTimeout(() => searchInput.current?.select(), 100);
  //     }
  //   },
  //   render: (text) =>
  //     searchedColumn === dataIndex ? (
  //       <Highlighter
  //         highlightStyle={{
  //           backgroundColor: "#ffc069",
  //           padding: 0,
  //         }}
  //         searchWords={[searchText]}
  //         autoEscape
  //         textToHighlight={text ? text.toString() : ""}
  //       />
  //     ) : (
  //       text
  //     ),
  // });

  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
      // ...getColumnSearchProps("name"),
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
    {
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              // onClick={() => save(record.key)}
              style={{
                marginRight: 5,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?">
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Button>Edit</Button>
        );
      },
    },
    {
      dataIndex: "",
      key: "x",
      render: () => (
        <Button
          onClick={() => {
            deleteTask({ variables: { _id: "62d94d3e0fc24d683efd616e" } });
          }}
        >
          Delete
        </Button>
      ),
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
      <Table
        columns={columns}
        dataSource={!getTasks.loading ? getTasks.data.tasks : ["No data"]}
        size="small"
      />
    </section>
  );
}
