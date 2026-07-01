import { Card, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const res = await api.get("/users");

    const user = res.data.find(
      (item) =>
        item.email === values.email &&
        item.password === values.password
    );

    if (user) {
      dispatch(login(user));

      message.success("Login Success");

      navigate("/");
    } else {
      message.error("Invalid Credentials");
    }
  };

  return (
    <Card
      title="CRM Login"
      style={{
        width: 400,
        margin: "80px auto",
      }}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          block
        >
          Login
        </Button>
      </Form>
    </Card>
  );
};

export default Login;