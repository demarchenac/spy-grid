import React from "react";
import { RandomUser } from "../../hooks/useRandomUser/types";
import { SpyMetadataGroup, SpyMetadata } from "../SpyMetadata";

type emptyFn = () => void;
type emptyPromise = () => Promise<void>;

interface SpyDetailProps {
  spy: RandomUser;
  refetch: emptyFn | emptyPromise;
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
    <article className="max-w-lg min-w-sm py-6 m-4 px-4 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col gap-2">
      <div className="w-full flex flex-col gap-2">
        <img
          src={largePhoto}
          alt={`${codename}'s photo`}
          title={`${codename}'s photo`}
          className="w-96.5 self-center rounded-md"
        />
        <h2 className="font-bold text-2xl font-fira-mono">@{codename}</h2>
      </div>

      <SpyMetadataGroup>
        <SpyMetadata title="first name" value={firstName} />
        <SpyMetadata title="last name" value={lastName} />
      </SpyMetadataGroup>

      <SpyMetadataGroup>
        <SpyMetadata title="gender" value={gender} />
        <SpyMetadata title="date of birth" value={dob.toLocaleDateString()} />
        <SpyMetadata title="eye color" value={eyeColor} type="color" />
      </SpyMetadataGroup>

      <SpyMetadataGroup>
        <SpyMetadata title="city" value={city} />
        <SpyMetadata title="state" value={state} />
        <SpyMetadata title="country" value={country} />
      </SpyMetadataGroup>

      <SpyMetadataGroup>
        <SpyMetadata title="timezone offset" value={timezone.offset} />
        <SpyMetadata
          title="timezone description"
          value={timezone.description}
        />
      </SpyMetadataGroup>

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
