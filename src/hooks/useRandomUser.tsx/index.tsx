import { useEffect, useState } from "react";
import { APIRandomUser, RandomUser, RandomUserAPIResponse } from "./types";

const API_URL = "https://randomuser.me/api";

function mapAPIPayloadToRandomUser(payload: APIRandomUser): RandomUser {
  return {
    firstname: payload.name.first,
    lastname: payload.name.last,
    username: payload.login.username,
    city: payload.location.city,
    state: payload.location.state,
    country: payload.location.country,
    gender: payload.location.country,
    dob: new Date(payload.dob.date),
    eyeColor: "I create this one",
    timezone: {
      offset: payload.location.timezone.offset,
      description: payload.location.timezone.description,
    },
    largephoto: payload.picture.large,
  };
}

export function useRandomUser() {
  const [isLoading, toggleLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<RandomUser | null>(null);

  const reset = () => {
    toggleLoading(true);
    setError(null);
    setData(null);
  };

  const refetch = async () => {
    reset();
    try {
      const response = await fetch(API_URL, {
        headers: { "Content-Type": "application/json" },
      });
      const json = (await response.json()) as RandomUserAPIResponse;

      const randomUser = mapAPIPayloadToRandomUser(json.results[0]);
      setData(randomUser);
    } catch (error: any) {
      if ("message" in error) {
        setError(error.message);
      }
    } finally {
      toggleLoading(false);
    }
  };

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
