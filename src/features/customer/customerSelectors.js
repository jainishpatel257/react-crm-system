export const selectCustomers = (state) =>
  state.customer.customers;

export const selectLoading = (state) =>
  state.customer.loading;

export const selectError = (state) =>
  state.customer.error;