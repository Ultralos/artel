import { createApi,  BaseQueryFn} from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.currencyapi.com/v3/latest?apikey=6PasrJ1090YtIFeCyuoeimQVjypIiZhVNVuvRAgi',
  }),
  endpoints: (builder) => ({
    convertCurrencies: builder.query<any, { from: string; to: string }>({
      query: (arg) => {
        const { from, to } = arg;
        return {
          url: '',
          method: 'get',
          params: { base_currency:from, currencies:to }
        };
      }
    })
  })
})

export const { useConvertCurrenciesQuery } = api
