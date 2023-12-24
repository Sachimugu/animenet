"use server";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data =  response.json();
  // console.log(data);
  return data;
};

export const fetchAnimeDetail = async (id: any) => {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data = await response.json();
  return data;
};
