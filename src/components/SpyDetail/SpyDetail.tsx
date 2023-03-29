import React from "react";
import { RandomUser } from "../../hooks/useRandomUser/types";
import { SpyMetadata } from "../SpyMetadata";

interface SpyDetailProps {
  spy: RandomUser;
  refetch: () => void;
}

function SpyDetail({
  refetch,
  spy: {
    city,
    country,
    dob,
    eyeColor,
    firstName,
    gender,
    largePhoto,
    lastName,
    state,
    timezone,
    username: codename,
  },
}: SpyDetailProps) {
  return (
    <article className="max-w-lg min-w-sm p-6 my-4 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <img
          src={largePhoto}
          alt={`${codename}'s photo`}
          className="w-96.5 self-center rounded-md"
        />
        <h2 className="font-bold text-2xl font-fira-mono">@{codename}</h2>
      </div>

      <div className="w-full flex flex-col gap-1">
        <SpyMetadata title="first name" value={firstName} />
        <SpyMetadata title="last name" value={lastName} />
      </div>

      <div className="w-full flex flex-col gap-1">
        <SpyMetadata title="gender" value={gender} />
        <SpyMetadata title="date of birth" value={dob.toLocaleDateString()} />
        <SpyMetadata title="eye color" value={eyeColor} />
      </div>

      <div className="w-full flex flex-col gap-1">
        <SpyMetadata title="city" value={city} />
        <SpyMetadata title="state" value={state} />
        <SpyMetadata title="country" value={country} />
      </div>

      <div className="w-full flex flex-col gap-1">
        <SpyMetadata title="timezone offset" value={timezone.offset} />
        <SpyMetadata
          title="timezone description"
          value={timezone.description}
        />
      </div>
      <button
        onClick={refetch}
        className="px-6 py-2 bg-slate-700 hover:bg-slate-900 transition-all ease-in rounded-lg  focus:ring-slate-800 focus:ring-2"
      >
        Next Asset
      </button>
    </article>
  );
}

export default React.memo(SpyDetail);
