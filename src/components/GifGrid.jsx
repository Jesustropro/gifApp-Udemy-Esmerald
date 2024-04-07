import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "../components";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="card-grid">
          {gifs?.map((gifs) => (
            <GifItem key={gifs.id} {...gifs} />
          ))}
        </div>
      )}
    </>
  );
};
