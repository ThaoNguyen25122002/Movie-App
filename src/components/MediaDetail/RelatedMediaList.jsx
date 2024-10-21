import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";

const RelatedMediaList = ({ mediaList = [], isLoading }) => {
  return (
    <div>
      <p className="mb-4 mt-6 text-[1.4vw] font-bold">More Like This</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              title={media.title}
              releaseDate={media.release_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default RelatedMediaList;
