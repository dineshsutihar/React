
const Home = ({darkMode=true}) => {
  return (
    <div 
      className={`container mx-auto p-4 min-h-[85vh] ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-300"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4">Welcome to Our App</h2>
      <p className="mb-4">
        This is the home page of our dark-themed app. It is built using React and styled with Tailwind CSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Feature One</h3>
          <p>
            Explore the first amazing feature of our application. It provides users with incredible benefits and seamless integration.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Feature Two</h3>
          <p>
            Discover the second feature that enhances your experience. Enjoy advanced functionalities and user-friendly interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
