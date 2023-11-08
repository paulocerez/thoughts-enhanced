// TypeScript type definitions for the baseURL property on the Axios instance

import axios from 'axios';

declare module 'axios' {
  export interface AxiosInstance {
    baseURL: string;
  }
}
