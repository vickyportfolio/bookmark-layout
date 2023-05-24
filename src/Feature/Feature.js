import './Feature.css';
import Book from '../images/illustration-features-tab-1.svg';
import Search from '../images/illustration-features-tab-2.svg';
import Sharing from '../images/illustration-features-tab-3.svg';
import { useState } from 'react';
const Feature = () => {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const tabFunction = (id) => {
    setIsActiveTab(id);
  };
  return (
    <div className="feature">
      <div className="description-container">
        <h2>Features</h2>
        <p className="para">
          Our aim is to make it quick and easy fro you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <ul className="feature-tab">
        <li
          className={isActiveTab === 1 ? 'active' : ''}
          onClick={() => tabFunction(1)}
        >
          Simple Bookmarking
        </li>
        <li
          className={isActiveTab === 2 ? 'active' : ''}
          onClick={() => tabFunction(2)}
        >
          Speedy Searching
        </li>
        <li
          className={isActiveTab === 3 ? 'active' : ''}
          onClick={() => tabFunction(3)}
        >
          Easy Sharing
        </li>
      </ul>
      <div className={isActiveTab === 1 ? 'tab-content' : 'none'}>
        <div className="tab-image-container">
          <div className="image-back">
            <img src={Book} alt="first-image" />
          </div>
        </div>
        <div className="text-container">
          <h2>A Simple Bookmark Manager</h2>
          <div className="para">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </div>
          <div className="button-container">
            <button className="large-btn">More info</button>
          </div>
        </div>
      </div>
      {/* 2nd tab */}
      <div className={isActiveTab === 2 ? 'tab-content' : 'none'}>
        <div className="tab-image-container">
          <div className="image-back">
            <img src={Search} alt="second-image" />
          </div>
        </div>
        <div className="text-container">
          <h2>Intelligent Search</h2>
          <div className="para">
            Our Powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </div>
          <div className="button-container">
            <button className="large-btn">More info</button>
          </div>
        </div>
      </div>
      {/* 3rd tab */}
      <div className={isActiveTab === 3 ? 'tab-content' : 'none'}>
        <div className="tab-image-container">
          <div className="image-back">
            <img src={Sharing} alt="third-image" />
          </div>
        </div>
        <div className="text-container">
          <h2>Share your bookmarks</h2>
          <div className="para">
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </div>
          <div className="button-container">
            <button className="large-btn">More info</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
