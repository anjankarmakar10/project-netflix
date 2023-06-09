import React from "react";
import { Star } from "react-feather";
import { IMG_PATH_500 } from "../constants";

const MoviesCard = ({ movie }) => {
  return (
    <article className="h-[150px] w-[280px] md:w-[328px] md:h-[180px] rounded-md overflow-hidden cursor-pointer card overlay  text-white ">
      <img
        src={IMG_PATH_500 + movie?.backdrop_path}
        alt={movie?.original_title}
      />
      <div className="absolute z-10 bottom-0 p-2 info pb-0">
        <h2 className="text-sm mb-2 font-medium leading-4 line-clamp-1">
          {movie?.title ? movie?.title : movie?.name}
        </h2>
        <p className="line-clamp-2 text-xs leading-4 mb-1 ">
          {movie?.overview}
        </p>
        <span className="rating flex w-fit items-center gap-1 ">
          <span>
            <Star
              width={14}
              color="#ffd600"
              fill="#ffd600"
              className="mb-[2px]"
            />
          </span>
          {+movie?.vote_average?.toFixed(1)}
        </span>
      </div>
    </article>
  );
};

export default MoviesCard;
