import React from 'react';
import './story.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const Story = ({ image, profileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Stack direction="row" spacing={0}>
        <Avatar className="avatar" src={profileSrc} />

        <h5>{title}</h5>
      </Stack>
    </div>
  );
};

export default Story;
