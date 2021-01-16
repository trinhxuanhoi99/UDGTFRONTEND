import { Plugin } from '@nuxt/types';

const Axios: Plugin = ({ $axios }) => {
  if (process.env.NODE_ENV === 'production') {
    $axios.setBaseURL(`${process.env.API_PRODUCTION}`);
  }
  $axios.setBaseURL(`${process.env.API_DEVELOPMENT}`);
};

export default Axios;
