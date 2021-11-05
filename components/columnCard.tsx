import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import PreviewCard from '../components/previewCard';
import ILabel from '../utils/interfaces/ILabel';
import IList from '../utils/interfaces/IList';
import useStore from '../hooks/useStore';

const ColumnCard = observer(({ name, cards }: IList) => {
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
      <Typography sx={{ fontSize: '16px', lineHeight: '24px' }}>{name}</Typography>
      {cards?.map((card) => {
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
              date={card.dateCreated}
              label={getLabel(card.labels)}
              members={card.members}
              key={card.id}
            />
          </div>
        );
      })}
    </Box>
  );
});

export default ColumnCard;
