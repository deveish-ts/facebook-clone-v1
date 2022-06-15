import React from 'react';
import './Widgets.css';
import Iframe from 'react-iframe';
const Widgets = () => {
  return (
    <div className="widgets">
      <Iframe
        url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1400px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="310"
        height="2400px"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
};

export default Widgets;
