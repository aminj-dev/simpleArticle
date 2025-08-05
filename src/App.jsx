import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Links } from "./Components/Links";
import { ArticleList } from "./Pages/ArticleList";
import { ArticleDetail } from "./Pages/ArticleDetail";
import { ApiContextProvider } from "./Context/Context";

function App() {
  return (
    <Router>
      <ApiContextProvider>
        <div className="app">
          <Links />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </div>
      </ApiContextProvider>
    </Router>
  );
}

export default App;
