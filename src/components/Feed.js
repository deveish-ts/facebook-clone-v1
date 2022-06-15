import React, { useState, useEffect, useContext,   } from 'react';
import './feed.css';
import StoryRow from './StoryRow';
import MessageSender from './MessageSender';
import Post from './Post';
import Context from './Context';
import db from '../firebaseConfig';
import { collection, getDocs, orderBy } from 'firebase/firestore';
function Feed( ) {
  const ctx = useContext(Context);

  const [posts, setPosts] = useState([]);
  const fetchData = () => {
    const querySnapshot = getDocs(
      collection(db, 'posts'),
      orderBy('timestamp', 'desc')
    ).then((data) => {
      setPosts(
        data.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
    console.log(querySnapshot);
  };
  ctx.updateFeed = fetchData;
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="feed">
      <StoryRow />
      <MessageSender />
      {posts.map((post) => {
        return (
          <Post
            key={Math.random() * 3}
            userProfilePic={post.data.userProfilePic}
            message={post.data.message}
            timeStamp={post.data.timeStamp}
            userName={post.data.userName}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
