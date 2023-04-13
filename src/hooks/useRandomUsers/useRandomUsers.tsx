import { useEffect, useState } from "react";
import { fetchRandomUser } from "../../lib/api";
import { RandomUser } from "../../types/randomUser";
import { useRandomUser } from "../useRandomUser";

interface useRandomUserProps {
  seeds: string[] | null;
}

export function useRandomUsers(
  { seeds = [] }: useRandomUserProps = { seeds: [] }
) {
  const [seedIndex, setSeedIndex] = useState(0);
  const [isLoading, toggleLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<RandomUser[] | null>(null);

  const currentSeed = (seeds && seeds[seedIndex]) ?? null;

  const currentSpy = useRandomUser({ seed: currentSeed });

  const goForward = () => {
    setSeedIndex((previous) => {
      const newValue = previous + 1;
      if (!seeds) {
        return 0;
      }
      return newValue >= seeds.length ? 0 : newValue;
    });
  };

  const goBackwards = () => {
    setSeedIndex((previous) => {
      const newValue = previous - 1;
      if (!seeds) {
        return 0;
      }
      return newValue < 0 ? seeds.length - 1 : newValue;
    });
  };

  const setCurrentSpy = (spySeed: string | null) => {
    if (!spySeed) {
      setSeedIndex(0);
      return;
    }

    let spySeedIndex = seeds?.indexOf(spySeed) ?? 0;
    if (spySeedIndex < 0) {
      spySeedIndex = 0;
    }

    setSeedIndex(spySeedIndex);
  };

  useEffect(() => {
    const fetchSpies = async () => {
      if (!seeds) {
        return;
      }

      const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

      const randomUsers: RandomUser[] = [];

      // reset state
      toggleLoading(true);
      setError(null);
      setData([]);

      for (const seed of seeds) {
        if (seeds.indexOf(seed) > 0) {
          await waitFor(100);
        }

        const randomUser = await fetchRandomUser({ seed });
        randomUsers.push(randomUser);
      }

      toggleLoading(false);
      setData(randomUsers);
    };

    fetchSpies();
  }, []);

  return {
    currentSpy,
    isLoading,
    data,
    error,
    goForward,
    goBackwards,
    setCurrentSpy,
  };
}
