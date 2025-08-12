import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { apiContext } from "../Context/Context";
import { MdOutlineMoreHoriz } from "react-icons/md";

export const ArticleList = () => {
  const navigate = useNavigate();
  const { articles } = useContext(apiContext);

  return (
    <div className="min-h-screen max-w-screen flex justify-center bg-[#d2e6e7]">
      <ul className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-9/10">
        {articles.map((item) => (
          <li
            key={item.id}
            className="relative flex bg-white rounded-2xl md:h-40 h-30"
          >
            <div className="flex flex-col absolute top-2 left-2 w-7/10">
              <h2 className="font-semibold text-[20px] md:text-[15px] sm:text-[15px]">{item.title}</h2>
            </div>
            <button
              onClick={() => navigate(`/article/${item.id}`)}
              className="absolute right-[8px] bottom-[8px] text-[#252525]  w-1/10 text-[30px] p-1 rounded-lg cursor-pointer"
            >
              <MdOutlineMoreHoriz />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
