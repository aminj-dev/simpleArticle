import { useParams } from "react-router-dom";
import { data } from "../Data/Data";

export const ArticleDetail = () => {
  const { id } = useParams();
  const article = data.find((a) => a.id === Number(id));
  console.log(article)
  console.log(Number(id))
  if (!article) return <h1 style={{ color: "red" }}>there is No Article with this id</h1>;
  else return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <span>
        {article.id} - {article.time}
      </span>
      <p>{article.content}</p>
    </div>
  );
};
