import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";
import DashboardCards from "../components/customer/DashboardCards";

import {
  fetchCustomers,
} from "../features/customer/customerSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { customers, loading } =
    useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader title="Dashboard" />

      <DashboardCards
        customers={customers}
      />
    </>
  );
};

export default Dashboard;