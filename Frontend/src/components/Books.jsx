import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from '../components/Cart';
import ShimmerCart from '../components/ShimmerCart';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Books() {
  const { resId } = useParams();
  const [Book, setBook] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      try {
        let response;
        if (resId != null) {
          response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${resId}`);
        } else {
          response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40`);
        }
        const res = response.data.items || [];
        setBook(res);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getBook();
  }, [resId]);

  const genres = [
    'Mystery', 'Fantasy', 'Science Fiction', 'Romance', 'Thriller', 'Horror',
    'Historical Fiction', 'Biography Autobiography', 'Self-help', 'Adventure',
    'Children’s Books', 'Classics', 'Fiction',
  ];

  return (
    <div className="flex mt-16 justify-around">
      {user === null || user === undefined ? ( // Fixed user check condition
        <div className="min-h-96 pt-10 text-xl">
          {'You have to login 🫠🫠'}
        </div>
      ) : (
        <div className="justify-around flex">
          <div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
              >
                {genres.map((genre) => (
                  <div className="hover:bg-slate-800 p-2 rounded-lg text-xl my-3" key={genre}>
                    <NavLink
                      to={`/books/${genre}`}
                      className={({ isActive }) =>
                        isActive ? 'text-purple-700 focus:text-purple-600 font-bold' : ''
                      }
                    >
                      {genre}
                    </NavLink>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="left_container w-2/12 h-[90vh] rounded-lg p-2 pt-4 overflow-y-scroll hide-scroll bg-gradient-to-b from-base-100 to-slate-900 hidden lg:block">
            {genres.map((genre) => (
              <div className="hover:bg-slate-800 p-2 rounded-lg text-xl my-3" key={genre}>
                <NavLink
                  to={`/books/${genre}`}
                  className={({ isActive }) =>
                    isActive ? 'text-purple-700 focus:text-purple-600 font-bold' : ''
                  }
                >
                  {genre}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="right_container w-full lg:w-9/12 py-4 lg:h-[90vh] lg:overflow-y-scroll hide-scroll rounded-lg bg-gradient-to-b from-base-100 to-slate-900">
            <div className="flex flex-wrap justify-center gap-4">
              {isLoading ? (
                Array(10)
                  .fill(0)
                  .map((_, index) => <ShimmerCart key={index} />)
              ) : Book && Book.length > 0 ? ( 
                Book.map((data) => (
                  <div className="flex justify-items-center" key={data.id}>
                    <Cart
                      name={data.volumeInfo.title}
                      title={data.volumeInfo.title}
                      image={data.volumeInfo.imageLinks?.thumbnail}
                      category={data.volumeInfo.categories?.join(', ')}
                      description={data.volumeInfo.description}
                      size={false}
                    />
                  </div>
                ))
              ) : (
                <p>No books available. Select any genre.</p> 
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
