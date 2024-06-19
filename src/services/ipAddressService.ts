import {environmentConfig} from '@environment';
import {createHttpClient} from '@lib';

const {IP_ADDRESS_URL} = environmentConfig;

export const searchIpAddress = async (ipAddress: string) => {
  const BASE_URL = ipAddress
    ? `${IP_ADDRESS_URL}/${ipAddress}/json/`
    : `${IP_ADDRESS_URL}/json/`;

  const client = createHttpClient(BASE_URL);

  try {
    const response = await client.get(ipAddress);
    return response.data;
  } catch (error) {
    console.error('Error fetching IP address', error);
    return null;
  }
};
