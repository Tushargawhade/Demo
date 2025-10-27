import React from "react";

function App() {
  return (
    <div className="h-screen w-full ">

      <nav className="w-[15%] h-full bg-zinc-50 pt-5 flex flex-col items-center">
        <a
          className="py-2 px-5 border rounded-md border-blue-300 text-blue-400 "
          href="/create"
        >
          Add New Product
        </a>

        <hr className="my-3 w-[80%] bg-zinc-200" />

        <h1 className="text-2xl w-[80%] mb-3  ">Category Filter</h1>

        <ul className=" w-[80%]">
          <li className="mb-3 flex items-center">
            <span className="w-[15px] h-[15px] rounded-full mr-3 bg-blue-100"></span>{" "}
            cat 1
          </li>

          <li className="mb-3 flex items-center">
            <span className="w-[15px] h-[15px] rounded-full mr-3 bg-red-100"></span>{" "}
            cat 1
          </li>

          <li className="mb-3 flex items-center">
            <span className="w-[15px] h-[15px] rounded-full mr-3 bg-green-100"></span>{" "}
            cat 1
          </li>
        </ul>
      </nav>

      



    </div>
  );
}

export default App;
