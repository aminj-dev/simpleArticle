export const Home = () => {
  return (
    <div className="relative max-w-screen h-screen bg-[#d2e6e7] flex">
      <div className="md:w-2/5 sm:w-3/5 w-4/5 top-1/12 left-1/12 flex flex-col gap-2 absolute">
        <h1 className="text-2xl font-bold">
          Welcome to SimpleArticles <br /> a simple article website built with
          React
        </h1>
        <p>
          This project demonstrates dynamic article listing and routing using
          React. Articles are fetched in real-time from a public API, allowing
          you to explore each one in detail. React Router is used for
          client-side navigation and dynamic content rendering.
        </p>

        <button className="bg-[#252525] w-25 h-10 rounded-xl text-white">
          <a href="https://github.com/aminj-dev">My Github</a>
        </button>
      </div>
    </div>
  );
};
