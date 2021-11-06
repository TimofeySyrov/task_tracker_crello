import { Box } from '@mui/system';
import { observer } from 'mobx-react';

import PreviewCard from '../previewCard';
import ILabel from '../../utils/interfaces/ILabel';
import IList from '../../utils/interfaces/IList';
import ColumnTextArea from './columnTextArea/columnTextArea';
import ButtonNewCard from '../buttonNewCard/buttonNewCard';
import useStore from '../../hooks/useStore';

const ColumnCard = observer(({ id, name, actions }: IList) => {
  const { boards } = useStore();

  function dragStartHandler(event, id) {
    boards.changeCurrentCard(id);
  }

  function dragEndHandler(event) {}

  function dragOverHandler(event) {
    event.preventDefault();
  }

  function dropHandler(event, id) {
    event.preventDefault();
    boards.replaceCard(id);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '298px',
        padding: '16px',
        backgroundColor: '#F9F9F9',
        border: '1px solid #E5E5E5',
        borderRadius: '4px',
        flexShrink: 0,
      }}
    >
      <ColumnTextArea listID={id} title={name} />
      {actions?.map((card) => {
        const getLabel = (labels: ILabel[]) => {
          if (labels.length) {
            return labels[0].color;
          }

          return undefined;
        };

        return (
          <div
            onDragStart={(event) => dragStartHandler(event, card.id)}
            onDragLeave={(event) => dragEndHandler(event)}
            onDragEnd={(event) => dragEndHandler(event)}
            onDragOver={(event) => dragOverHandler(event)}
            onDrop={(event) => dropHandler(event, card.id)}
            draggable={true}
          >
            <PreviewCard
              id={card.id}
              text={card.name}
              label={getLabel(card.labels)}
              members={card.members}
              key={card.id}
            />
          </div>
        );
      })}
      <ButtonNewCard idList={id} />
    </Box>
  );
});

export default ColumnCard;
