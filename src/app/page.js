"use client";

import { useEffect, useState } from "react";
import Background from "@/components/layout/Background";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4af29920e903cef08f533ae3feff4860&language=en-US&page=1")
    .then(res => res.json())
    .then(json => setMovies(json.results))
    .catch(err => console.error(err))
  },[])

  return (
    <div className="home-page" aria-label="home page">
      {movies && <Background movies={movies} />}
      <header>

      </header>
      <main>
      
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    
  );
}
