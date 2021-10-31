import Card from './card';
import Boards from './boards';
import Profile from './profile';

class Storage {
  profile = new Profile();
  boards = new Boards();
  card = new Card();
}

export default Storage;
