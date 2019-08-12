import axios from 'axios';

const DOMAIN = 'https://test-dev.com';

class ApiService {
  public request(type: string, url: string, data?: any) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            "status": 200,
            "data": {
              "users": ['a', 'b', 'c']
            }
          });
        }, 700);
      })
  }

  public post(url: string, data: any) {
    return axios.post(`${DOMAIN}/${url}`, data, this.getConfig());
  }

  public get(url: string) {
    return axios.get(`${DOMAIN}/${url}`, this.getConfig());
  }

  public put(url: string, data: any) {
    return axios.put(`${DOMAIN}/${url}`, data, this.getConfig());
  }

  public delete(url: string) {
    return axios.delete(`${DOMAIN}/${url}`, this.getConfig());
  }

  private getConfig() {
    return {
      headers: {
        'authorization': 'test',
        'Content-Type': 'application/json',
      },
    };
  }
}

export default new ApiService();
