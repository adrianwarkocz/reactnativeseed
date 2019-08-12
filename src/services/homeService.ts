import ApiService from './index';

export const getHomeData = () => {
  return ApiService.request('get', 'get-homeData');
};