
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <Link to="/" className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">
        Go Home
      </Link>
    </div>
  );
};

export default NoPage;
