import {
    Table,
    Button,
    Space,
    Tag,
    Popconfirm,
  } from "antd";
  
  import { Link } from "react-router-dom";
  
  const CustomerTable = ({
    customers,
    handleDelete,
  }) => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
  
      {
        title: "Company",
        dataIndex: "company",
        key: "company",
      },
  
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
  
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
      },
  
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
  
        render: (status) => (
          <Tag
            color={
              status === "Active"
                ? "green"
                : "red"
            }
          >
            {status}
          </Tag>
        ),
      },
  
      {
        title: "Action",
        key: "action",
  
        render: (_, record) => (
          <Space>
            <Link
              to={`/customers/edit/${record.id}`}
            >
              <Button type="primary">
                Edit
              </Button>
            </Link>
  
            <Popconfirm
              title="Delete Customer?"
              description="Are you sure?"
              okText="Yes"
              cancelText="No"
              onConfirm={() =>
                handleDelete(record.id)
              }
            >
              <Button danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        ),
      },
    ];
  
    return (
      <Table
        rowKey="id"
        columns={columns}
        dataSource={customers}
        bordered
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
        }}
      />
    );
  };
  
  export default CustomerTable;