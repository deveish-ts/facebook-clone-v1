import React, { useContext } from 'react';
import './sideBar.css';
import SideBarRow from './SideBarRow';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import {
  FaPager,
  FaUserFriends,
  FaFacebookMessenger,
  FaShoppingBasket,
  FaVideoSlash,
} from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Context from './Context';
function Sidebar(props) {
  const ctx = useContext(Context);
  const user = ctx.user;
  return (
    <div className="sidebar">
      <SideBarRow title={user.displayName} src={user.photoURL} />
      <SideBarRow
        title="Covid 19 Information"
        Icon={MdOutlineHealthAndSafety}
      />
      <SideBarRow title="Pages" Icon={FaPager} />
      <SideBarRow title="Friends" Icon={FaUserFriends} />
      <SideBarRow title="Messenger" Icon={FaFacebookMessenger} />
      <SideBarRow title="Marketplace" Icon={FaShoppingBasket} />
      <SideBarRow title="Videos" Icon={FaVideoSlash} />
      <SideBarRow title="" Icon={AiOutlineArrowDown} />
    </div>
  );
}

export default Sidebar;
