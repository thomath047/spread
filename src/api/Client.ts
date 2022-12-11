import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "http://localhost:3001/"
});

export interface Set {
    setId: string,
    setName: string,
    year: number,
    themeId: number,
    themeName: string,
    isFavorite: boolean,
    numParts: number
}

export const getSets = async function (searchQuery: string): Promise<Set[]> {
    let response = await axiosInstance.get<Set[]>(`/sets${searchQuery && `?search=${searchQuery}`}`);

    return response.data
}

export const getFavorites = async function (): Promise<Set[]> {
    let response = await axiosInstance.get<Set[]>(`/favorites`);

    return response.data
}

export const addFavorite = async function (setId: string): Promise<number> {
    let response = await axiosInstance.post<number>(`/favorites`, {
        setId
    });

    return response.status
}

export const deleteFavorite = async function (setId: string): Promise<number> {
    let response = await axiosInstance.delete<number>(`/favorites/${setId}`);

    return response.status
}