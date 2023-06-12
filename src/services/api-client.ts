import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd88a4db09195414593fbd83f5d96ccf0',
  },
});
