import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class Profile {
  public fullName = '';

  public countBoards = 0;

  public bio = '';

  public avatarUrl = '';

  public key = `${process.env.NEXT_PUBLIC_TRELLO_KEY}`;
  public token = localStorage.getItem(`${process.env.NEXT_PUBLIC_TOKEN_STORAGE_NAME}`);

  constructor() {
    makeAutoObservable(this);
  }

  public async getData() {
    const response: { data: { fullName: string; idBoards: []; bio: string; avatarUrl: string } } =
      await axios.get(`https://api.trello.com/1/members/me?key=${this.key}&token=${this.token}`);

    this.fullName = response.data.fullName;
    this.countBoards = response.data.idBoards.length;
    this.bio = response.data.bio;
    this.avatarUrl = `${response.data.avatarUrl}/170.png`;
  }
}

export default Profile;
