import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { apiContext } from "../Context/Context";

export const ArticleList = () => {
  const navigate = useNavigate();
  const {articles} = useContext(apiContext);

  return (
    <div className="article-container">
      <ul>
        {articles.map((item) => (
          <li key={item.id}>
            <div className="article-info">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
            <button onClick={() => navigate(`/article/${item.id}`)}>More...</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
