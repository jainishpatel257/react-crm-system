import { Row, Col, Input, Select } from "antd";

const SearchFilter = ({
  search,
  setSearch,
  status,
  setStatus,
}) => {
  return (
    <Row
      gutter={[16, 16]}
      style={{ marginBottom: 20 }}
    >
      <Col xs={24} md={12}>
        <Input
          placeholder="Search Customer..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </Col>

      <Col xs={24} md={12}>
        <Select
          value={status}
          style={{ width: "100%" }}
          onChange={setStatus}
          options={[
            {
              label: "All",
              value: "All",
            },
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
      </Col>
    </Row>
  );
};

export default SearchFilter;