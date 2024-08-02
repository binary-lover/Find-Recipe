import { Search } from "lucide-react";
import React from "react";
import Recipiecard from "../Recipiecard";

const HomePage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label
            className="input shadow-md flex items-center gap-2"
            style={{ outline: "none" }}
          >
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow border-red-300"
              placeholder="what do you want to cook today?"
            />
          </label>
        </form>
        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Reccomended recepie
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tighter">
          Popular recepies
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Recipie card */}
          <Recipiecard />
          <Recipiecard />
          <Recipiecard />
          <Recipiecard />
          <Recipiecard />
          <Recipiecard />
          <Recipiecard />
          <Recipiecard />
          <Recipiecard />

        </div>
      </div>
    </div>
  );
};

export default HomePage;
