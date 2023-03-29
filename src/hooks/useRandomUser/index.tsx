import { useCallback, useEffect, useState } from "react";
import { APIRandomUser, RandomUser, RandomUserAPIResponse } from "./types";

const API_URL = "https://randomuser.me/api";

function mapAPIPayloadToRandomUser(payload: APIRandomUser): RandomUser {
  const colors = [
    "bg-red-600",
    "bg-amber-600",
    "bg-yellow-400",
    "bg-lime-500",
    "bg-emerald-600",
    "bg-cyan-400",
    "bg-blue-700",
    "bg-indigo-600",
    "bg-violet-900",
    "bg-purple-800",
    "bg-fuchsia-500",
    "bg-pink-400",
    "bg-rose-700",
  ];

  const color = Math.max(Math.round(Math.random() * colors.length) - 1, 0);

  return {
    firstName: payload.name.first,
    lastName: payload.name.last,
    username: payload.login.username,
    city: payload.location.city,
    state: payload.location.state,
    country: payload.location.country,
    gender: payload.gender,
    dob: new Date(payload.dob.date),
    eyeColor: colors[color],
    timezone: {
      offset: payload.location.timezone.offset,
      description: payload.location.timezone.description,
    },
    largePhoto: payload.picture.large,
  };
}

export function useRandomUser(
  { seeds = null }: { seeds?: string[] | null } = { seeds: null }
) {
  const [isLoading, toggleLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<RandomUser | null>(null);
  const [seedIndex, setSeedIndex] = useState<number>(0);

  const refetch = useCallback(async () => {
    // reset state
    toggleLoading(true);
    setError(null);
    setData(null);

    let apiURL = API_URL;

    if (seeds && seeds.length > 0) {
      apiURL = `${apiURL}?seed=${seeds[seedIndex]}`;
    }

    try {
      const response = await fetch(apiURL, {
        headers: { "Content-Type": "application/json" },
      });

      const json = (await response.json()) as RandomUserAPIResponse;

      const randomUser = mapAPIPayloadToRandomUser(json.results[0]);
      setData(randomUser);

      // loop through seeds!
      if (seeds) {
        setSeedIndex((previous) => {
          const newValue = previous + 1;
          return newValue >= seeds.length ? 0 : newValue;
        });
      }
    } catch (error: any) {
      console.error(error);
      if ("message" in error) {
        setError(error.message);
      }
    } finally {
      toggleLoading(false);
    }
  }, [seedIndex]);

  useEffect(() => {
    refetch();
  }, []);

  return {
    isLoading,
    error,
    data,
    refetch,
  };
}
