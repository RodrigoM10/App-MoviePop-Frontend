import { useEffect, useState } from "react";
import { getAllMovies, getMovies } from "../services/moviesService";

export function useRequestMovies(movieParam) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async function () {
          setIsLoading(true);
          const {error, data} = await getMovies(movieParam);
          if ( data ) {
              setData(data);
          } else {
              alert(error, 'erorr en la api');
          }
          setIsLoading(false)
      })();
    }, [movieParam]);
    
  return [data, isLoading];
}


export function useRequestAllMovies(pageParam) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async function () {
          setIsLoading(true);
          const {error, data} = await getAllMovies(pageParam);
          if ( data ) {
              setData(data);
          } else {
              alert(error, 'erorr en la api');
          }
          setIsLoading(false)
      })();
    }, []);
    
  return [data, isLoading];
}