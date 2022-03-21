import { Get } from "./apiService"

const ENDPOINT_SERACH_SHOWS = '/search/shows'
const ENDPOINT_ALL_SHOWS = '/shows'

const getMovies = async (movieParam) => {
    const {data, error} = await Get(ENDPOINT_SERACH_SHOWS, {params: { q: movieParam}});
    return {data: data, error}
}

const getAllMovies = async (pageParam) => {
    const {data, error} = await Get(ENDPOINT_ALL_SHOWS,{params: { page: pageParam}});
    return {data: data, error}
}

export {getMovies, getAllMovies};