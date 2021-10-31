import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

import IUser from '../utils/interfaces/IUser';
import Label from './label';

type props = {
  id: string;
  text: string;
  date: string;
  label?: string;
  members?: IUser[];
};

const PreviewCard = ({ id, text, date, label, members }: props) => {
  let avatars = null;

  const performDate = (value: string) => {
    const date = new Date (value);
    const month = date.toLocaleString('EN-en', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  if (typeof members !== 'undefined') {
    avatars = (
      <Box sx={{ display: 'flex', gap: '8px', margin: '8px', justifyContent: 'flex-end' }}>
        {members.map((member) => {
          return <Avatar alt={member.fullName} src={member.avatarUrl + '/50.png'} key={member.id} />;
        })}
      </Box>
    );
  }

  return (
    <Card variant="outlined" sx={{ borderColor: '#666666' }}>
      <CardContent sx={{ padding: '8px' }}>
        {label ? <Label label={label} /> : null}
        <Typography
          sx={{
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '500',
            color: '#221c1d',
            marginTop: '8px',
            marginBottom: '8px',
          }}
        >
          <a href={`card?id=${id}`} >{text}</a>
        </Typography>
        <Typography sx={{ fontSize: '11px', lineHeight: '16px', color: '#666666' }}>
          {performDate(date)}
        </Typography>
      </CardContent>
      {avatars}
    </Card>
  );
};

export default PreviewCard;
