import React from "react";
import { RandomUser } from "../../hooks/useRandomUser/types";

interface SpyDetailProps {
  spy: RandomUser;
}

function SpyDetail({
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
    <article className="max-w-lg min-w-sm p-6 my-4 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col">
      <img
        src={largePhoto}
        alt={`${codename}'s photo`}
        className="w-96.5 self-center"
      />

      <p>
        <span>
          <b>Codename:</b>
        </span>
        {codename}
      </p>
      <p>
        <span>
          <b>First name:</b>
        </span>
        {firstName}
      </p>
      <p>
        <span>
          <b>Last name:</b>
        </span>
        {lastName}
      </p>

      <p>
        <span>
          <b>Gender:</b>
        </span>
        {gender}
      </p>
      <p>
        <span>
          <b>Date of birth:</b>
        </span>
        {dob.toLocaleDateString()}
      </p>
      <p>
        <span>
          <b>Eye color:</b>
        </span>
        {eyeColor}
      </p>

      <p>
        <span>
          <b>City:</b>
        </span>
        {city}
      </p>
      <p>
        <span>
          <b>State:</b>
        </span>
        {state}
      </p>
      <p>
        <span>
          <b>Country:</b>
        </span>
        {country}
      </p>

      <p>
        <span>
          <b>Timezone offset:</b>
        </span>
        {timezone.offset}
      </p>
      <p>
        <span>
          <b>Timezone description:</b>
        </span>
        {timezone.description}
      </p>
    </article>
  );
}

export default React.memo(SpyDetail);
