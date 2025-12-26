import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Client"],

  endpoints: (builder) => ({
    /* =========================
       GET ALL CLIENTS
    ========================= */
    getAllClients: builder.query({
      query: () => ({
        url: "/client",
        method: "GET",
      }),
      providesTags: ["Client"],
    }),

    /* =========================
       GET CLIENT BY ID
    ========================= */
    getClientById: builder.query({
      query: (id) => ({
        url: `/client/${id}`,
        method: "GET",
      }),
      providesTags: (r, e, id) => [{ type: "Client", id }],
    }),

    /* =========================
       CREATE CLIENT
    ========================= */
    createClient: builder.mutation({
      query: (formData) => ({
        url: "/client",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Client"],
    }),

    /* =========================
       UPDATE CLIENT
    ========================= */
    updateClient: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/client/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Client"],
    }),

    /* =========================
       DELETE CLIENT
    ========================= */
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `/client/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Client"],
    }),
  }),
});

export const {
  useGetAllClientsQuery,
  useGetClientByIdQuery,
  useCreateClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = clientApi;
