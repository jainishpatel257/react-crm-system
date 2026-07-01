import { Typography } from "antd";

const { Title } = Typography;

const PageHeader = ({ title }) => {
  return (
    <Title
      level={3}
      style={{
        marginBottom: 20,
      }}
    >
      {title}
    </Title>
  );
};

export default PageHeader;