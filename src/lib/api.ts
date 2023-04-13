import { RandomUserAPIResponse } from "../types/randomUser";
import { mapAPIPayloadToRandomUser } from "./utils";

const baseApiUrl = "https://randomuser.me/api";

interface fetchRandomUserArgs {
  seed: string | null;
}

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchRandomUser(
  { seed = null }: fetchRandomUserArgs = { seed: null }
) {
  let apiUrl = baseApiUrl;

  if (seed) {
    apiUrl = `${apiUrl}?seed=${seed}`;
  }

  const response = await fetch(apiUrl, {
    headers: { "Content-Type": "application/json" },
  });

  const json = (await response.json()) as RandomUserAPIResponse;

  const randomUser = mapAPIPayloadToRandomUser(json.results[0]);

  if (seed) {
    return { ...randomUser, seed };
  }

  return randomUser;
}
