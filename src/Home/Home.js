import './Home.css';
import image from '../images/illustration-hero.svg';
const Features = () => {
  return (
    <div className="home">
      <div className="image-container">
        <div className="image-back">
          <img src={image} alt="first-image" />
        </div>
      </div>
      <div className="pad text-container">
        <h2>A Simple Bookmark Manager</h2>
        <div className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          beatae harum fuga est odit error ex fugit deserunt. Odit porro
          accusamus, inventore quod eos voluptates nisi iste modi hic eligendi!
        </div>
        <div className="button-container duplex">
          <button className="large-btn">Add it on Chrome</button>
          <button className="shadow-btn">Add it on Firefox</button>
        </div>
      </div>
    </div>
  );
};
export default Features;
