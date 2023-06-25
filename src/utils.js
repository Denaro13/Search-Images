import axios from "axios";

const customFetch = axios.create({
  baseURL:
    "https://api.unsplash.com/search/photos?client_id=ET4npiKGcTtjxF54IdKUEjZiWaTEV8u1Q1LKOIL_dG4&query=dog",
});

export default customFetch;
