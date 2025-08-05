export const Home = () => {
  return (
    <div className="home">
      <div className="welcome-text">
        <h1>
          Welcome to SimpleArticles <br /> a simple article website built with
          React
        </h1>
        <p>
          This project demonstrates dynamic article listing and routing using
          React. Articles are fetched in real-time from a public API, allowing
          you to explore each one in detail. React Router is used for
          client-side navigation and dynamic content rendering.
        </p>

        <button>
          <a href="https://github.com/aminj-dev">My Github</a>
        </button>
      </div>
    </div>
  );
};
