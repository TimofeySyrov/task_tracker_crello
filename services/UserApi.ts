import axios from "axios";

class UserApi {

  private trelloDomain: string;

  constructor() {
    this.trelloDomain = 'https://api.trello.com/1/';
  }

  public async perform (url: string, data?: any, config?: any) {
    const request = await fetch(`${this.trelloDomain}/${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json'
      },
    });

    return await request.json();
  }

  public async get (path: string) {
    return await this.perform(`${path}`);
  }

  public async post (path: string, data: any) {
    return await this.perform(`${path}`, data, {
      method: 'POST'
    });
  }

  public async put (path: string, data: any) {
    return await this.perform(`${path}`, data, {
      method: 'PUT'
    });
  }

  public async delete (path: string) {
    return await this.perform(`${path}`, {
      method: 'DELETE'
    });
  }
}

export default new UserApi();