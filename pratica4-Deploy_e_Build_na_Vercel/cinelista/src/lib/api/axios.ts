import axios from "axios";

const apiKey = process.env.TMDB_API_KEY;

if (!apiKey) {
    throw new Error("TMDB_API_KEY is not configured.");
}

const tmdbAPI = axios.create({
    baseURL: process.env.TMDB_API_URL,
    headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
    },
});

export default tmdbAPI;
