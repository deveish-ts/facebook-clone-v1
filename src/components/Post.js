import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';
const Post = ({ userProfilePic, image, userName, timeStamp = 1, message }) => {
  return (
    <div className="post">
      <div className="postTop">
        <Stack direction="row" spacing={0}>
          <Avatar src={userProfilePic} className="postAvatar" />
        </Stack>
        <div className="postTopInfo">
          <h4>{userName}</h4>
          <p>{timeStamp.toString()}</p>
        </div>
      </div>
      <div className="postBottom">
        <p>{message}</p>
      </div>
      <div className="postImage">{image && <img src={image} alt="imag" />}</div>
      <div className="postOptions">
        <div className="postOption">
          <AiOutlineLike />
          <p>Like</p>
        </div>
        <div className="postOption">
          <AiOutlineComment />
          <p>Comment</p>
        </div>
        <div className="postOption">
          <BiShare />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
