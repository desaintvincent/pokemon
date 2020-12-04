import useSWR from "swr";
import FetchError from "./FetchError";

export const fetcher = (resource, init) =>
    fetch(resource, init).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return res
            .text()
            .catch(() => {
                throw new FetchError(res);
            })
            .then((text) => {
                console.log("text", text);
                throw new FetchError(res, text);
            });
    })

const useApi = (path = null) => {
    return useSWR(path ? `https://pokeapi.co/api/v2${path}` : null);
};

export const usePokemon = (name) => {
    return useApi(`/pokemon/${name}`);
};

export const usePokemons = () => {
    return useApi(`/pokemon/`);
};
