import { useEffect, useState } from "react";
import { fetchRandomUser } from "../../lib/api";
import { RandomUser } from "../../types/randomUser";

export function useRandomUser(
  { seed = null }: { seed?: string | null } = { seed: null }
) {
  const [isLoading, toggleLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<RandomUser | null>(null);

  const reset = () => {
    setData(null);
  };

  const refetch = async () => {
    // reset state
    toggleLoading(true);
    setError(null);
    setData(null);

    try {
      const randomUser = await fetchRandomUser({ seed });
      setData(randomUser);

      // loop through seeds!
    } catch (error: any) {
      console.error(error);
      if ("message" in error) {
        setError(error.message);
      }
    } finally {
      toggleLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, [seed]);

  return {
    isLoading,
    error,
    data,
    refetch,
    reset,
  };
}
