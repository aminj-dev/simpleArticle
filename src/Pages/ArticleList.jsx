import { useNavigate } from "react-router-dom";
import { data } from "../Data/Data";

export const ArticleList = () => {
  const navigate = useNavigate();

  return (
    <div className="article-container">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div className="article-info">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
            <button onClick={() => navigate(`/article/${item.id}`)}>More...</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
