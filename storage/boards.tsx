import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class Boards {
  public idBoards = [];

  public Boards = [];

  public key = `${process.env.NEXT_PUBLIC_TRELLO_KEY}`;
  public token = localStorage.getItem(`${process.env.NEXT_PUBLIC_TOKEN_STORAGE_NAME}`);

  constructor() {
    makeAutoObservable(this);
  }

  public getData() {
    this.Boards = [];

    axios
      .get(`https://api.trello.com/1/members/me?key=${this.key}&token=${this.token}`)
      .then((response: { data: { idBoards: [] } }) => {
        this.idBoards = response.data.idBoards;
      })
      .finally(() => {
        this.idBoards.forEach((idBoard) => {
          axios
            .get(`https://api.trello.com/1/boards/${idBoard}?key=${KEY}&token=${TOKEN}`)
            .then((response: { data: { name: string } }) => {
              this.Boards.push({ name: response.data.name, id: idBoard, desc: response.data.desc });
            });
        });
      });
  }
}

export default Boards;
