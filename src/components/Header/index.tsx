import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="ml-2 text-2xl font-bold">Clothes</h1>
        </div>
        <nav className="space-x-10 text-base">
          <Link to={"/"} className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to={"/product"} className="text-gray-300 hover:text-white">
            Product
          </Link>
          <Link to={"/"} className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link to={"/"} className="text-gray-300 hover:text-white">
            About
          </Link>
        </nav>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header
