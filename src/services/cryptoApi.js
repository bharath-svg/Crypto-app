import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'eb1f05163emsh474b0e779055ff7p1196fcjsna61256f89b17'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url , headers:cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath :'createApi',
  baseQuery : fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos:builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: ( coinId ) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history/${timeperiod}`),
    }),
  })

})

export const {useGetCryptosQuery, useGetCryptoDetailsQuery , useGetCryptoHistoryQuery} = cryptoApi; 




//var options = {
    //method: 'GET',
    //url: 'https://coinranking1.p.rapidapi.com/stats',
    //headers: {
      //'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      //'x-rapidapi-key': 'eb1f05163emsh474b0e779055ff7p1196fcjsna61256f89b17'
    //}
  //};