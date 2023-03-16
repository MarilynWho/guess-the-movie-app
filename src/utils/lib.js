import API from "./Api-omdb";
import DeezerAPI from "./DeezerAPI";
// function to rundomize our array of movies
export function shuffle(array) {
  const copy = Array.from(array);
  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export async function getQuestions() {
  const movieNames = await fetch("/data/movieData.json").then((res) => {
    return res.json();
  });
  const movies = shuffle(movieNames).slice(0, 10);
  const pairs = [];
  for (var i = 0; i < movies.length; i += 2) {
    pairs.push(movies.slice(i, i + 2));
  }

  return pairs.map((moviepair) => {
    return {
      name1: moviepair[0],
      name2: moviepair[1],
      correctAns: moviepair[Math.round(Math.random())],
    };
  });
}

export async function getQuestionData({ name1, name2, correctAns }) {
  const poster1 = await getPoster(name1);
  const poster2 = await getPoster(name2);
  const soundtrack = await getSoundtrack(correctAns);
  return { name1, poster1, name2, poster2, correctAns, soundtrack };
}

function getPoster(movieName) {
  // function to get data from OMDB
  return API.search(movieName)
    .then((res) => {
      return res.data.Poster;
    })
    .catch(() => {
      return null;
    });
}

function getSoundtrack(movieName) {
  return DeezerAPI.search(movieName)
    .then((res) => {
      return res.data.data[0].preview;
    })
    .catch(() => null);
}
