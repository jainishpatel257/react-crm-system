import {
    createSlice,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  
  import customerService from "../../services/customerService";
  
  const initialState = {
    customers: [],
    loading: false,
    error: null,
  };
  
  // GET
  export const fetchCustomers = createAsyncThunk(
    "customer/fetchCustomers",
    async (_, thunkAPI) => {
      try {
        return await customerService.getCustomers();
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );
  
  // ADD
  export const addCustomer = createAsyncThunk(
    "customer/addCustomer",
    async (customer, thunkAPI) => {
      try {
        return await customerService.addCustomer(customer);
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );
  
  // UPDATE
  export const updateCustomer = createAsyncThunk(
    "customer/updateCustomer",
    async (customer, thunkAPI) => {
      try {
        return await customerService.updateCustomer(customer);
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );
  
  // DELETE
  export const deleteCustomer = createAsyncThunk(
    "customer/deleteCustomer",
    async (id, thunkAPI) => {
      try {
        await customerService.deleteCustomer(id);
        return id;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );
  
  const customerSlice = createSlice({
    name: "customer",
  
    initialState,
  
    reducers: {},
  
    extraReducers: (builder) => {
      builder
  
        // FETCH
        .addCase(fetchCustomers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(
          fetchCustomers.fulfilled,
          (state, action) => {
            state.loading = false;
            state.customers = action.payload;
          }
        )
  
        .addCase(
          fetchCustomers.rejected,
          (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }
        )
  
        // ADD
        .addCase(
          addCustomer.fulfilled,
          (state, action) => {
            state.customers.push(action.payload);
          }
        )
  
        // UPDATE
        .addCase(
          updateCustomer.fulfilled,
          (state, action) => {
            const index =
              state.customers.findIndex(
                (item) =>
                  item.id ===
                  action.payload.id
              );
  
            if (index !== -1) {
              state.customers[index] =
                action.payload;
            }
          }
        )
  
        // DELETE
        .addCase(
          deleteCustomer.fulfilled,
          (state, action) => {
            state.customers =
              state.customers.filter(
                (item) =>
                  item.id !== action.payload
              );
          }
        );
    },
  });
  
  export default customerSlice.reducer;