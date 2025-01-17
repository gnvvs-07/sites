import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // setting the window browser to the search term
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-teal-300 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="cursor-pointer font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">L</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-teal-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button type="submit">
            <FaSearch className="text-slate-500" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline cursor-pointer text-slate-700">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline cursor-pointer text-slate-700">
              About
            </li>
          </Link>
          <Link to="profile">
            {currentUser ? (
              <img
                className=" rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="cursor-pointer text-slate-700">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
