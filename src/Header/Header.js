import { useState } from 'react';
import './Header.css';
import Listing from './Listing';
import BookMark from '../images/logo-bookmark.svg';
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const headerChange = () => {
    setIsMobile(!isMobile);
  };
  // const headerStyles = {
  //   backgroundColor: '#525274',
  //   opacity: '0.9',
  //   height: '100vh',
  //   position: 'fixed',
  //   zIndex: '999',
  // };
  return (
    <header className={`mainHeader ${isMobile ? 'headerStyles' : ''} `}>
      <div className="logo-block">
        <img src={BookMark} alt="BookMark" />
      </div>
      <Listing headerChange={headerChange} isMobile={isMobile} />
    </header>
  );
};
export default Header;
