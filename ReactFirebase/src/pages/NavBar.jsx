import { Link } from 'react-router-dom'; 

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/signup" className="text-gray-300 hover:text-white">
            Signup
          </Link>
          <Link to="/signin" className="text-gray-300 hover:text-white">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
