import { Card, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomerForm from "../components/customer/CustomerForm";

import {
  addCustomer,
} from "../features/customer/customerSlice";

const AddCustomer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    await dispatch(addCustomer(values));

    message.success(
      "Customer Added Successfully"
    );

    navigate("/customers");
  };

  return (
    <Card
      title="Add Customer"
      style={{
        maxWidth: 700,
        margin: "20px auto",
      }}
    >
      <CustomerForm
        onFinish={handleSubmit}
        buttonText="Save Customer"
      />
    </Card>
  );
};

export default AddCustomer;