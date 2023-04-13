import React from "react";
import { RandomUser } from "../../types/randomUser";
import { SpyMetadataGroup, SpyMetadata } from "../SpyMetadata";

type emptyFn = () => void;
type emptyPromise = () => Promise<void>;

interface SpyDetailProps {
  spy: RandomUser;
  refetch: emptyFn | emptyPromise;
  onNextSpy?: emptyFn;
  onPreviousSpy?: emptyFn;
  onGoBack?: emptyFn;
}

function SpyDetail({
  refetch,
  onNextSpy = () => {},
  onPreviousSpy = () => {},
  onGoBack = () => {},
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
    seed,
  },
}: SpyDetailProps) {
  const handleNextAssetClick = () => {
    if (seed) {
      onNextSpy();
    } else {
      refetch();
    }
  };

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

      <div className="flex justify-between gap-2">
        {seed && (
          <div className="w-1/2">
            <button
              onClick={onPreviousSpy}
              className="w-full px-3 py-1 text-sm md:px-6 md:py-2 md:text-base bg-slate-700 hover:bg-slate-900 transition-all ease-in rounded-lg  focus:ring-slate-800 focus:ring-2"
            >
              Previous asset
            </button>
          </div>
        )}
        <div className={seed ? "w-1/2" : "w-full"}>
          <button
            onClick={handleNextAssetClick}
            className="w-full px-3 py-1 text-sm md:px-6 md:py-2 md:text-base bg-slate-700 hover:bg-slate-900 transition-all ease-in rounded-lg  focus:ring-slate-800 focus:ring-2"
          >
            Next asset
          </button>
        </div>
      </div>

      {seed && (
        <button
          onClick={onGoBack}
          className="px-3 py-1 text-sm md:px-6 md:py-2 md:text-base bg-amber-900 hover:bg-amber-600 transition-all ease-in rounded-lg  focus:ring-slate-800 focus:ring-2"
        >
          Go back
        </button>
      )}
    </article>
  );
}

export default React.memo(SpyDetail);
