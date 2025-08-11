import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { apiContext } from "../Context/Context";

export const ArticleList = () => {
  const navigate = useNavigate();
  const { articles } = useContext(apiContext);

  return (
    <div className="min-h-screen bg-[#d2e6e7]">
      <ul className="flex flex-col gap-4 article-list items-center">
        {articles.map((item) => (
          <li
            key={item.id}
            className="relative flex bg-white rounded-2xl w-9/10"
          >
            <div className="flex flex-col gap-2">
              <h2>{item.title}</h2>
              <p className="max-w-3/4">{item.body}</p>
            </div>
            <button
              onClick={() => navigate(`/article/${item.id}`)}
              className="absolute right-[8px] bottom-[8px] bg-[#252525] text-2xl text-white p-1 rounded-lg cursor-pointer"
            >
              More...
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
