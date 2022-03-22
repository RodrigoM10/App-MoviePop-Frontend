import { useEffect, useState } from "react";
import { getMovie, getMovies } from "../services/moviesService";

export function useRequestMovies(movieParam) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const { error, data } = await getMovies(movieParam);
      if (data) {
        setData(data);
      } else {
        alert(error, "erorr en la api");
      }
      setIsLoading(false);
    })();
  }, [movieParam]);

  return [data, isLoading];
}

export function useRequestMovieById(id) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const { error, data } = await getMovie(id);
      if (data) {
        setData(data);
      } else {
        alert(error, "erorr en la api");
      }
      setIsLoading(false);
    })();
  }, [id]);

  return [data, isLoading];
}
