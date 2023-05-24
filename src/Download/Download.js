import './Download.css';
import Chrome from '../images/logo-chrome.svg';
import Firefox from '../images/logo-firefox.svg';
import Opera from '../images/logo-opera.svg';

const Download = () => {
  return (
    <div className="download">
      <div className="description-container">
        <h2>Download the extension</h2>
        <p className="para">
          We've got more browser in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="browser-container">
        <div className="browser">
          <img src={Chrome} alt="chrome" />
          <span>Add to Chrome</span>
          <small>Minimum version 62</small>
          <div className="button-download">
            <button className="large-btn">Add & Install Extension</button>
          </div>
        </div>
        <div className="browser">
          <img src={Firefox} alt="firefox" />

          <span>Add to Firefox</span>
          <small>Minimum version 55</small>
          <div className="button-download">
            <button className="large-btn">Add & Install Extension</button>
          </div>
        </div>
        <div className="browser">
          <img src={Opera} alt="opera" />
          <span>Add to Opera</span>
          <small>Minimum version 46</small>
          <div className="button-download">
            <button className="large-btn">Add & Install Extension</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Download;
