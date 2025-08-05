import { useContext } from "react";
import { useParams } from "react-router-dom";
import { apiContext } from "../Context/Context";

export const ArticleDetail = () => {
  const {articles} = useContext(apiContext);
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));
  console.log(article);
  console.log(Number(id));
  if (!article)
    return <h1 style={{ color: "red" }}>there is No Article with this id</h1>;
  else
    return (
      <div className="article-detail">
        <div className="title">
          <h1>{article.title}</h1>
          <span>
            id - userId : {article.id} - {article.userId}
          </span>
        </div>
        <p>{article.body}</p>
      </div>
    );
};
