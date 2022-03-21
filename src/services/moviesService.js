import { Get } from "./apiService"

const ENDPOINT_SERACH_SHOWS = '/search/shows'
const ENDPOINT_ALL_SHOWS = '/shows'

const getMovies = async (movieParam) => {
    const {data, error} = await Get(ENDPOINT_SERACH_SHOWS, {params: { q: movieParam}});
    return {data: data, error}
}

const getMovie = async (id) => {
    const {data, error} = await Get(`${ENDPOINT_ALL_SHOWS}/${id}`);
    return {data: data, error}
}

export {getMovies, getMovie};