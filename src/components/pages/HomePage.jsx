import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Recipiecard from "../Recipiecard";
import { getRandomColor } from "./lib/utils";
const HomePage = () => {
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;

  const [recipie, setRecipie] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchrecipie = async (query) => {
    setLoading(true);
    setRecipie([]);
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}&type=public`
      );
      const data = await response.json();
      setRecipie(data.hits);
      console.log(recipie);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchrecipie("biryani");
  }, []);

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchrecipie(e.target.querySelector("input").value);
          }}
        >
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
          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-white shadow-md rounded-md p-4">
                  <div className="w-full h-28 bg-gray-200 rounded-md"></div>
                  <div className="h-8 bg-gray-200 rounded-md w-10/12 mt-2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-1/2 mt-2 mb-2"></div>
                  <div className="flex items-center justify-start">
                    <div className="h-6 bg-gray-200 rounded-md w-1/3 mt-2"></div>
                    <div className="h-6 bg-gray-200 rounded-md w-1/3 mt-2 ml-3"></div>
                  </div>
                    <div className="h-6 bg-gray-200 rounded-md w-1/2 mt-2"></div>
                </div>
              </div>
            ))}
          {!loading &&
            recipie.map((recipe, index) => (
              // console.log(recipe)

              <Recipiecard
                key={index}
                img={recipe.recipe.image}
                title={recipe.recipe.label}
                diet={recipe.recipe.dietLabels}
                yeald={recipe.recipe.yield}
                cusine={recipe.recipe.cuisineType}
                health={recipe.recipe.healthLabels}
                youtube={recipe.recipe.url}
                {...getRandomColor()}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
