import { useEffect } from "react";
import { Card, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import CustomerForm from "../components/customer/CustomerForm";

import {
  fetchCustomers,
  updateCustomer,
} from "../features/customer/customerSlice";

const EditCustomer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const { customers, loading } = useSelector(
    (state) => state.customer
  );

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(fetchCustomers());
    }
  }, [dispatch, customers.length]);

//   const customer = customers.find(
//     (item) => item.id === Number(id)
//   );

const customer = customers.find(
    (item) => item.id === id
  );

  const handleSubmit = async (values) => {
    try {
      await dispatch(
        updateCustomer({
        //   id: Number(id),
          id: id,
          ...values,
        })
      ).unwrap();

      message.success(
        "Customer Updated Successfully"
      );

      navigate("/customers");
    } catch (error) {
      message.error(
        "Failed To Update Customer"
      );
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!customer) {
    return <h2>Customer Not Found</h2>;
  }

  return (
    <Card
      title="Edit Customer"
      style={{
        maxWidth: 700,
        margin: "20px auto",
      }}
    >
      <CustomerForm
        initialValues={customer}
        buttonText="Update Customer"
        onFinish={handleSubmit}
      />
    </Card>
  );
};

export default EditCustomer;