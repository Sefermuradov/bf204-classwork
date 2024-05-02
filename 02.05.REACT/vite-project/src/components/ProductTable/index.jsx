import React, { useEffect, useState } from "react";
import { Popconfirm, Table, Tooltip, message } from "antd";
import { deleteOne, getAll } from "../../services";
import { endpoint } from "../../services/constant";
import { Button } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const Tablee = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll(endpoint.products)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const confirm = (id) => {
    deleteOne(endpoint.products, id).then((response) => {
      if (response.status === 200) {
        const filtered = [...data].filter((q) => q.id != id);
        setData(filtered);
      }
    });
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (element, data, i) => (
        <img src={element} alt={data.title} width={100} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (element) => {
        return (
          <Tooltip title={element}>
            <span>{element.slice(0, 30)}...</span>
          </Tooltip>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (element, data, i) => {
        return `$${element}`;
      },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      render: (element, data, i) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => confirm(data.id)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (element, data, i) => (
        <Button type="primary" block>
          Edit
        </Button>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey={"id"}
      pagination={{
        pageSize: 5,
      }}
    />
  );
};

export default Tablee;
