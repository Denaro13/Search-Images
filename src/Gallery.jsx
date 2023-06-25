import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
import axios from "axios";
import { useGlobalContext } from "./context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });
  // console.log(response);
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>loading....</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>there was an error....</h4>
      </section>
    );
  }
  const result = response.data.results;
  if (result.length < 1) {
    return (
      <section className="image-container">
        <h4>there is no available image....</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item?.urls?.regular;
        // console.log(url);
        return (
          <img
            key={item.id}
            className="img"
            src={url}
            alt={item.alt_description}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
