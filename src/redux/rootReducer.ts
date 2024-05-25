import { baseApi } from "./api/baseApi";


export const reducer = {
  //   category: courseReducer,

  [baseApi.reducerPath]: baseApi.reducer,
};