import { AxiosError } from 'axios';
import { Plugin } from '@nuxt/types';

const Axios: Plugin = ({ $axios, redirect }) => {
  if (process.env.NODE_ENV === 'production') {
    $axios.setBaseURL(`${process.env.API_PRODUCTION}`);
  }
  $axios.setBaseURL(`${process.env.API_DEVELOPMENT}`);

  $axios.onError((error: AxiosError) => {
    if (error.response?.status === 500) {
      redirect('/sorry');
    }
  });
};

export default Axios;
