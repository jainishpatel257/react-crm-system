import { useEffect, useState } from "react";
import EmptyState from "../components/common/EmptyState";

import {
  Button,
  message,
} from "antd";

import {
  Link,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";

import SearchFilter from "../components/customer/SearchFilter";
import CustomerTable from "../components/customer/CustomerTable";

import {
  fetchCustomers,
  deleteCustomer,
} from "../features/customer/customerSlice";

const Customers = () => {
  const dispatch = useDispatch();

  const {
    customers,
    loading,
  } = useSelector(
    (state) => state.customer
  );

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await dispatch(
        deleteCustomer(id)
      ).unwrap();

      message.success(
        "Customer Deleted Successfully"
      );

    } catch (error) {

      message.error(
        "Delete Failed"
      );

    }
  };

  const filteredCustomers =
    customers.filter((item) => {

      const searchMatch =
        item.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const statusMatch =
        status === "All"
          ? true
          : item.status === status;

      return (
        searchMatch &&
        statusMatch
      );

    });

  if (loading)
    return <Loader />;

  return (
    <>

      <PageHeader
        title="Customers"
      />

      <Link to="/customers/add">

        <Button
          type="primary"
          style={{
            marginBottom: 20,
          }}
        >
          Add Customer
        </Button>

      </Link>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      {/* <CustomerTable
        customers={
          filteredCustomers
        }
        handleDelete={
          handleDelete
        }
      /> */}
      {
filteredCustomers.length===0 ?

<EmptyState/>

:

<CustomerTable
customers={filteredCustomers}
handleDelete={handleDelete}
/>

}

    </>
  );
};

export default Customers;