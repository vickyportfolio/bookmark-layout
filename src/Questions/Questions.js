import Accordian from './Accordian';
import './Question.css';
const Questions = () => {
  const dataQuestion = [
    {
      question: 'What is Bookmark',
      answer:
        '1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae suscipit, necessitatibus error numquam vero ad. Illum, non. Odio culpa et asperiores eaque numquam rem esse sint ex neque repudiandae.',
    },
    {
      question: 'How can i request a new browser',
      answer:
        '2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae suscipit, necessitatibus error numquam vero ad. Illum, non. Odio culpa et asperiores eaque numquam rem esse sint ex neque repudiandae.',
    },
    {
      question: 'is There a Mobile app',
      answer:
        '3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae suscipit, necessitatibus error numquam vero ad. Illum, non. Odio culpa et asperiores eaque numquam rem esse sint ex neque repudiandae.',
    },
    {
      question: 'What about other Chromium browsers?',
      answer:
        '4.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae suscipit, necessitatibus error numquam vero ad. Illum, non. Odio culpa et asperiores eaque numquam rem esse sint ex neque repudiandae.',
    },
  ];

  return (
    <div className="questions">
      <div className="description-container">
        <h2>Frequently Asked Questions</h2>
        <p className="para">
          Here are some of our FAQs. if you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="accordion-container">
        {dataQuestion.map((item, index) => (
          <Accordian question={item.question} answer={item.answer} />
        ))}
      </div>
      <button className="large-btn">More info</button>
    </div>
  );
};
export default Questions;
