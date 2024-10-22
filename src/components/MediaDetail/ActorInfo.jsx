import ImageComponent from "@components/Image";
import { Link } from "react-router-dom";

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="rounded-lg border border-slate-300 bg-black shadow-sm"
    >
      <ImageComponent
        width={216}
        height={350}
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
        className={"rounded-lg"}
      />
      {/* <img
        className="rounded-lg"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
        width={216}
        height={350}
      /> */}
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && <p>{episodeCount} Episodes</p>}
      </div>
    </Link>
  );
};
export default ActorInfo;
