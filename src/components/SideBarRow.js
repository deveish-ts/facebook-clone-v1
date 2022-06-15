import React from 'react';
import './SidebarRow.css';

const SideBarRow = ({ src, Icon, title }) => {
  return (
    <div className="sideBarRow">
      {src && (
        <img
          src={src}
          alt=""
          style={{ width: '40px', borderRadius: '999px' }}
        />
      )}
      {Icon && <Icon fontSize="30px" />}
      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;
