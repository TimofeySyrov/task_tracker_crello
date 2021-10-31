import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';

import StorageContext from '../context/storageContext';

const Card = observer(() => {
  const storage = useContext(StorageContext);

  useEffect(() => {
    storage.card.getData('RkkdsYSg');
  }, []);

  return (
    <>
      <div>{storage.card.desc}</div>
      <div>{storage.card.name}</div>
      <div>{storage.card.dateLastActivity}</div>
      <div>{storage.card.membersAvatar}</div>
    </>
  );
});

export default Card;
