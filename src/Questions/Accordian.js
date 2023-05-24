import { useState } from 'react';
import BlueArrow from '../images/icon-arrow.svg';
import RedArrow from '../images/icon-bad.svg';
const Accordian = ({ question, answer }) => {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="accordion-box" onClick={() => setIsopen(!isopen)}>
      <div className="flex-accord">
        <h4>{question}</h4>
        {isopen ? (
          <img src={RedArrow} alt="redarrow" />
        ) : (
          <img src={BlueArrow} alt="blueArrow" />
        )}
      </div>

      <div className={`para ${isopen ? 'open' : 'close'}`}>{answer}</div>
    </div>
  );
};
export default Accordian;
