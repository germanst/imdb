const SERVER_URL = 'http://www.omdbapi.com/?apikey=f16936f';

export default class Api { 
   getBaseConfig = () => {
    return {
      headers: {
        Accept: 'application/json',
      },
      mode: 'cors',
    };
  };

  handleResponse = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  request = (endpoint, config) =>
    fetch(SERVER_URL + endpoint, config)
      .then(this.handleResponse)
      .then(response => response.json())
      .catch(e => console.error(e));

 post = (endpoint, data) => {
    const body = JSON.stringify(data);
    const method = 'POST';
    return this.request(endpoint, { ...this.getBaseConfig(), method, body });
  }

  get = (endpoint) => {
    return this.request(endpoint, this.getBaseConfig());
  }
};