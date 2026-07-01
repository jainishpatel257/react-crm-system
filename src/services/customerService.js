import api from "../api/axios";
const BASE_URL = "/customers"

const customerService = {
    getCustomers: async () => {
      const response = await api.get(BASE_URL);
      return response.data;
    },
  
    addCustomer: async (customer) => {
      const response = await api.post(BASE_URL, customer);
      return response.data;
    },
  
    updateCustomer: async (customer) => {
      const response = await api.put(
        `${BASE_URL}/${customer.id}`,
        customer
      );
      return response.data;
    },
  
    deleteCustomer: async (id) => {
      await api.delete(`${BASE_URL}/${id}`);
      return id;
    },
  };
  
  export default customerService;