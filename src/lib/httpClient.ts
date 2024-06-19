import axios, {AxiosError, AxiosResponse} from 'axios';

export const createHttpClient = (baseURL: string) => {
  const httpClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const max_time = 3;
  let counter = 0;

  // Response interceptor
  httpClient.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      let message;
      if (error.message) {
        message = error.message;
      } else if (error.request) {
        message = 'Request error';
      } else {
        message = error.message;
      }

      switch (error.response?.status) {
        case 401:
          console.log('Unauthorized 401');
          break;

        default:
          console.log('Error message:', message);
          break;
      }
      const {config} = error;
      if (counter < max_time) {
        counter++;
        return new Promise(resolve => {
          resolve(httpClient(config as any));
        });
      }
      return Promise.reject(error);
    },
  );

  return httpClient;
};
