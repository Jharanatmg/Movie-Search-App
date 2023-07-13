import React, { ChangeEvent, useContext, useState } from "react";

import { MovieContext } from "../context/MovieContext";

interface IItem {
  title: string;
  id: string;
  thumbnail: string;
}

const SearchBar = () => {
  const [input, setInput] = useState("");

  const [filterData, setFilterData] = useState<IItem[]>([]);

  const { movies } = useContext(MovieContext);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);

    const filterData = movies.filter((item) =>
      item.title.toLocaleLowerCase().includes(input.toLowerCase())
    );

    setFilterData(filterData);
  };

  return (
    <>
      <div className="flex flex-col min-h-full justify-center items-center">
        <input
          className="rounded-md p-2 w-96"
          type="text"
          placeholder="search"
          onChange={handleInput}
        />

        <div className="grid grid-cols-3 gap-3 text-white ">
          {filterData.map((movie) => (
            <div key={movie.id} className="w-54 h-32 border-2">
              <p>{movie.title}</p>

              <img src={movie.thumbnail}></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
