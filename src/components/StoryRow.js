import React from 'react';
import './storyRow.css';
import Story from './Story';
const StoryRow = () => {
  return (
    <div className="storyRow">
      <Story
        title="Shiba Inu"
        image="https://images.news18.com/ibnlive/uploads/2021/04/1619332442_untitled-design-2021-04-25t120052.407.png?impolicy=website&width=510&height=356"
        profileSrc="https://images.news18.com/ibnlive/uploads/2021/06/1623900306_untitled-design-2021-06-17t085747.057.png?impolicy=website&width=510&height=356"
      />
      <Story
        title="Mark Zuckerberg"
        image="https://i.dailymail.co.uk/1s/2021/07/05/00/45034097-9755533-image-a-21_1625440814004.jpg"
        profileSrc="https://miro.medium.com/max/1400/1*QY47PAYM2KK8ww-Ol1CaNA.jpeg"
      />
      <Story
        title="Elon Mask"
        image="https://i0.wp.com/www.ripplesnigeria.com/wp-content/uploads/2022/04/Amebo-hub-elon-musk.jpg?w=486&ssl=1"
        profileSrc="https://i.blogs.es/d84c5d/elon-twitter/1366_2000.jpg"
      />
      <Story
        title="Jeff Bezos"
        image="https://img.etimg.com/thumb/msid-88667682,width-650,imgsize-105438,,resizemode-4,quality-100/jeff-bezos-l.jpg"
        profileSrc="https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg"
      />
    </div>
  );
};

export default StoryRow;
