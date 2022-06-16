import React, { useState, useContext } from 'react';
import './messageSender.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaPhotoVideo, FaRegSmileBeam } from 'react-icons/fa';
import Context from './Context';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../firebaseConfig';

const MessageSender = () => {
  const ctx = useContext(Context);
  const user = ctx.user;
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const handelSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    //   db

    const addData = async () => {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          message: input,
          timeStamp: serverTimestamp(),
          userProfilePic: user.photoURL,
          userName: user.displayName,
          image: imageURL,
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };
    addData();
    ctx.updateFeed();
    setInput('');
    setImageURL('');
  };

  return (
    <div className="messageSender">
      <div className="messageSenderTop">
        <Stack direction="row" spacing={0}>
          <Avatar src={user.photoURL} />
        </Stack>

        <form>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="messageSenderInput"
            placeholder={`What's on your mind? ${user.displayName}`}
          />
          <input
            className=""
            type="text"
            placeholder="Image URL (Optional)"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button type="submit" className="hiddenBtn" onClick={handelSubmit}>
            Post
          </button>
        </form>
      </div>
      <div className="messageSenderBottom">
        <div className="messageSenderOption">
          <BsCameraVideoFill style={{ color: 'red', fontSize: '20px' }} />
          <h5>Live video</h5>
        </div>
        <div className="messageSenderOption">
          <FaPhotoVideo style={{ color: 'green', fontSize: '20px' }} />
          <h5>Photos/Videos</h5>
        </div>
        <div className="messageSenderOption">
          <FaRegSmileBeam style={{ color: 'orange', fontSize: '20px' }} />
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
