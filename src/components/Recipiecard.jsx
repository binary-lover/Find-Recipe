import { Heart, HeartPulse, Soup } from "lucide-react";
import { FaBeer, FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import React, { useState } from "react";
// import { FaYoutube } from "react-icons/fa";

const Recipiecard = ({
  img,
  title,
  diet,
  yeald,
  cusine,
  health,
  youtube,
  bg,
  badge,
}) => {
  const twoHealth = []
  if (health.length > 2) {
    twoHealth.push(health[0], health[1]);
  } else {
    twoHealth.push(health[0]);
  }
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorite")?.includes(title));
  const addRecipeToFavorite = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
    const isRecipeExist = favorite.some((recipe) => recipe.title === title);
    if (isRecipeExist) {
      favorite = favorite.filter((recipe) => recipe.title !== title);
      setIsFavorite(false);
    } else{
      favorite.push({img, title, diet, yeald, cusine, health, youtube, bg, badge});
      setIsFavorite(true);

    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
  };
  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
    >
      <a href={youtube} target="_blank" className="relative h-32">
        <div className="skeleton absolute inset-0"/>
        <img
          src={img}
          alt="recipie image"
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1  cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> {yeald} servings
        </div>
        <div className="absolute top-2 right-2 bg-white rounded-full cursor-pointer p-1 " onClick={(e)=>{
          e.preventDefault();
          addRecipeToFavorite();
        }}
        >
          {!isFavorite && <Heart
            size={20}
            className="hover:fill-red-500 hover:text-red-500 transition duration-200 ease-in-out"
          />}
          {isFavorite && <Heart
            size={20}
            className="fill-red-500 text-red-500 transition duration-200 ease-in-out"
          />}
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide ">{title}</p>
      </div>
      <p className="my-2">
        {cusine[0].charAt(0).toUpperCase() + cusine[0].slice(1)} Kitchen
      </p>

      <div className="flex gap-2 mt-auto ">
        {twoHealth.map((label, index) => (
          <div
            key={index}
            className={`flex  gap-1 items-center ${badge} p-1 rounded-md  `}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
            {/* <FaYoutube /> */}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-auto ">
        {[1].map((label, index) => (
          <div
            key={index}
            className={`flex mt-1  gap-1 items-center ${badge} p-1 rounded-md  `}
          >
            <span className="text-sm tracking-tighter font-semibold">
              <div className="flex items-center">
                <div>
                  <FaYoutube size={16} />
                </div>
                <div className="ml-2">
                  <a
                    href={`https://www.youtube.com/results?search_query=${title} ${cusine} recipe`}
                    target="_blank"
                  >
                    watch on YouTube
                  </a>
                </div>
              </div>
            </span>
            {/* <FaYoutube /> */}
          </div>
        ))}
      </div>
      {/* <span className='text-sm tracking-tighter font-semibold'><FaYoutube size={20} />
      </span> */}
    </div>
  );
};

export default Recipiecard;
