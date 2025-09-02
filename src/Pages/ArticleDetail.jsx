import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiContext } from "../Context/Context";

export const ArticleDetail = () => {
  const navigate = useNavigate();
  const { articles } = useContext(apiContext);
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));
  console.log(article);
  console.log(Number(id));
  if (!article)
    return <h1 className="text-red-600">there is No Article with this id</h1>;
  else
    return (
      <div className="max-w-screen h-screen relative bg-[#d2e6e7]">
        <div className="h-4/10 flex flex-col gap-8 absolute top-8 left-8 text-[21px]">
          <div className="max-w-3/4">
            <h1>{article.title}</h1>
            <span>
              id - userId : {article.id} - {article.userId}
            </span>
          </div>
          <p className="max-w-3/4 ">{article.body}</p>
          <button
            onClick={() => navigate("/article")}
            className="cursor-pointer bg-[#252525] w-30 h-10 rounded-2xl text-white p-4 flex items-center justify-center"
          >
            Back
          </button>
        </div>
      </div>
    );
};
