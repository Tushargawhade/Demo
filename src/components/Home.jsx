import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Nav />

      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <Link
          to="/details/1"
          className="card w-[18%] h-[30vh] flex flex-col justify-center items-center rounded border shadow mr-3 mb-2 p-3  "
        >
          <div
            className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center  hover:scale-110  "
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>

          <h1 className="hover:text-blue-400">Lorem ipsum sit amet.</h1>
        </Link>
      </div>
    </>
  );
}

export default Home;
