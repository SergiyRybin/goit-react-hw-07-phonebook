import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mySlice = createSlice({
  name: "myValue",
  initialState: {
    filter: "",
  },

  reducers: {
  //   addContact(state, action) {
  //     state.contacts.items.push(action.payload);
  //   },
  // },
  // removeContact(state, action) {
  //   const remove = state.contacts.items.filter(
  //     (contact) => contact.name !== action.payload
  //   );
  //   localStorage.setItem("contacts", JSON.stringify(remove));
  //   state.contacts.items = remove;
  // },

  filterContact(state, action) {
    state.filter = action.payload;
  }},
});

// export const { addContact } = mySlice.actions;

// export const { removeContact } = mySlice.actions;

export const { filterContact } = mySlice.actions;

// // export const contactValue = (state) => state.myValue.contacts.items;

// // export const filterValue = (state) => state.myValue.contacts.filter;

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62d82adc9c8b5185c7846b84.mockapi.io",
  }),
  // tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      // providesTags: ['Contacts']
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
