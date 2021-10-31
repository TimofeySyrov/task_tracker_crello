import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

type card = { data: { fullName: string; idBoards: []; bio: string; avatarUrl: string } };

class Card {
  public desc: string = '';

  public name: string = '';

  public dateLastActivity: string = '';

  public membersAvatar = [];

  constructor() {
    makeAutoObservable(this);
  }

  public async getData(id: string) {
    const response: { data: card } = await axios.get(
      `https://api.trello.com/1/cards/iZI1nNfi?members=true&key=66196052e0874cd6053399639259887c&token=6a513d9830c65dc02cd06ed4a9330e17362004d5bcebbb9c08d9412192854a7e`,
    );

    console.log(response.data);

    this.update(response.data);
  }

  private update(data: card): void {
    runInAction(() => {
      this.desc = data.desc;
      this.name = data.name;
      this.dateLastActivity = this.getDate(data.dateLastActivity);
      this.membersAvatar = data.members.map((item) => {
        return `${item.avatarUrl}/170.png`;
      });
    });
  }

  private getDate(string: string): string {
    const time = string.split('T')[1].slice(0, 5);
    let date: string = string.split('T')[0];
    date = date.split('-');
    date = [date[2], date[1], date[0]];
    date = date.join('.');

    return `${date}, ${time}`;
  }
}

export default Card;
