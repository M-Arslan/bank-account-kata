import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Bank Account App</h1>
      <nav>
        <ul className="list-none p-0">
          <li className="mb-2">
            <Link to="/account" className="text-blue-500 underline">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
