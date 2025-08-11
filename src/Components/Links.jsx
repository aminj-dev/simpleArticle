import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div className="sticky max-w-screen h-12 flex items-center justify-center bg-[#252525]">
      <ul className="flex w-8/10 gap-10 font-semibold text-[18px] text-white">
        <li className="list-none">
          <Link to='/' className="no-underline">Home</Link>
        </li>
        <li className="list-none">
          <Link to='/article' className="no-underline">Articles</Link>
        </li>
      </ul>
    </div>
  );
};
