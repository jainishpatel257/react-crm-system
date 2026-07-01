import { Card, Col, Row, Statistic } from "antd";
import {
  TeamOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";

const DashboardCards = ({ customers }) => {
  const total = customers.length;

  const active = customers.filter(
    (item) => item.status === "Active"
  ).length;

  const inactive = customers.filter(
    (item) => item.status === "Inactive"
  ).length;

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={8}>
        <Card>
          <Statistic
            title="Total Customers"
            value={total}
            prefix={<TeamOutlined />}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={8}>
        <Card>
          <Statistic
            title="Active Customers"
            value={active}
            valueStyle={{ color: "green" }}
            prefix={<UserAddOutlined />}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={8}>
        <Card>
          <Statistic
            title="Inactive Customers"
            value={inactive}
            valueStyle={{ color: "red" }}
            prefix={<UserDeleteOutlined />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardCards;