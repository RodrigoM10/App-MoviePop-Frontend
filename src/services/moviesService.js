import { Get } from "./apiPublicService"

const SERACH_SHOWS_ENDPOINT = '/search/shows'
const SHOWS_ENDPOINT_ = '/shows'

const getMovies = async (movieParam) => {
    const {data, error} = await Get(SERACH_SHOWS_ENDPOINT, {params: { q: movieParam}});
    return {data: data, error}
}

const getMovie = async (id) => {
    const {data, error} = await Get(`${SHOWS_ENDPOINT_}/${id}`);
    return {data: data, error}
}

export {getMovies, getMovie};