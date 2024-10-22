// import { currencyFormatter } from "@libs/utils";

const TVShowInformation = ({ tvInfo = {} }) => {
  // console.log(tvInfo);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfo.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(tvInfo.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
            className="mr-1 mt-1 w-[1.4vw]"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        <p>
          {" "}
          {(tvInfo.networks || []).map((network) => (
            <img
              className="invert"
              key={network.id}
              src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
            />
          ))}
        </p>
      </div>
    </div>
  );
};
export default TVShowInformation;
