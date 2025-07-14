import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/article'>Articles</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
      </ul>
    </div>
  );
};
