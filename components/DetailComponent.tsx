// DetailComponent.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  item: any;
};

const DetailComponent: React.FC<Props> = ({ item }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <div className="container mx-auto mt-8 p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image
              src={`https://shikimori.one${item.image.original}`}
              alt={item.name}
              width={350}
              height={930}
              className="rounded-xl"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">{item.name}</h1>

            <p
              className={`text-gray-700 ${
                !showFullDescription && "line-clamp-3"
              }`}
            >
              {item.description}
            </p>
            {!showFullDescription && (
              <button
                onClick={toggleDescription}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {showFullDescription ? "Read Less" : "Read More"}
              </button>
            )}
            <p className="text-sm text-gray-500 mt-2">Score: {item.score}</p>
            <p className="text-sm text-gray-500">Status: {item.status}</p>
            <p className="text-sm text-gray-500">Episodes: {item.episodes}</p>
            <p className="text-sm text-gray-500">Aired on: {item.aired_on}</p>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Genres</h2>
              <ul className="flex flex-wrap">
                {item.genres.map((genre: any) => (
                  <li
                    key={genre.id}
                    className="bg-red-500 rounded-full py-1 px-3 text-sm mr-2 mb-2"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4">
        <h2 className="text-xl font-bold m-4">Videos</h2>
        <div className="flex flex-wrap">
          {item.videos.map((video: any) => (
            <div key={video.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <iframe
                src={video.player_url}
                title={video.name}
                className="w-full h-32 md:h-48 lg:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailComponent;
