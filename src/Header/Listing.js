import './Listing.css';
const Listing = ({ headerChange, isMobile }) => {
  return (
    <>
      <ul className={isMobile ? 'mobile-list' : 'list'}>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <button className="login">Login</button>
        </li>
        <li>
          <button onClick={headerChange}>
            {isMobile ? (
              <i className="fa fa-times" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-bars" aria-hidden="true"></i>
            )}
          </button>
        </li>
      </ul>
    </>
  );
};
export default Listing;
