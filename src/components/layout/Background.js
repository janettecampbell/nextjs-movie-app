import React from "react";

function Background({ movies }) {
  let backgroundPath;
  let backgroundTitle;

  // get popular movie for background
  // exclude adult and horror films
  const getBackground = () => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].adult) {
        continue;
      } else {
        const genre = movies[i].genre_ids;
        for (let j = 0; j < genre.length; j++) {
          if (genre[j] === 27) {
            i++;
            break;
          }
        }
        backgroundPath = movies[i].backdrop_path;
        break;
      }
    }
  };

  // get title of the popular movie chosen for background
  const getTitle = () => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].adult) {
        continue;
      } else {
        const genre = movies[i].genre_ids;
        for (let j = 0; j < genre.length; j++) {
          if (genre[j] === 27) {
            i++;
            break;
          }
        }
        backgroundTitle = movies[i].title;
        break;
      }
    }
  };

  getBackground();
  getTitle();

  return (
    <div className="background" aria-label="background">
      <img
        className="background-image"
        src={`https://image.tmdb.org/t/p/original${backgroundPath}`}
        alt={backgroundTitle}
      />
    </div>
  );
}

export default Background;
