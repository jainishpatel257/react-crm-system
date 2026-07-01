import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import AddCustomer from "../pages/AddCustomer";
import EditCustomer from "../pages/EditCustomer";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />

        <Route path="/customers" element={<Customers />} />

        <Route
          path="/customers/add"
          element={<AddCustomer />}
        />

        <Route
          path="/customers/edit/:id"
          element={<EditCustomer />}
        />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;