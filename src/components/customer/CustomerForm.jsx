import { useEffect } from "react";
import { Form, Input, Select, Button } from "antd";

const CustomerForm = ({
  onFinish,
  initialValues,
  buttonText,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Customer Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please Enter Customer Name",
          },
        ]}
      >
        <Input placeholder="Enter Customer Name" />
      </Form.Item>

      <Form.Item
        label="Company"
        name="company"
        rules={[
          {
            required: true,
            message: "Please Enter Company Name",
          },
        ]}
      >
        <Input placeholder="Enter Company Name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please Enter Valid Email",
          },
        ]}
      >
        <Input placeholder="Enter Email" />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please Enter Phone Number",
          },
        ]}
      >
        <Input placeholder="Enter Phone Number" />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[
          {
            required: true,
            message: "Please Select Status",
          },
        ]}
      >
        <Select
          placeholder="Select Status"
          options={[
            {
              label: "Active",
              value: "Active",
            },
            {
              label: "Inactive",
              value: "Inactive",
            },
          ]}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
        >
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomerForm;