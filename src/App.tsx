import { useEffect, useState } from "react";
import { Spinner } from "./components/Spinner";
import { SpyDetail } from "./components/SpyDetail";
import { useRandomUser } from "./hooks/useRandomUser";

interface AppProps {
  seeds?: string[] | null;
}

function App({ seeds = null }: AppProps = { seeds: null }) {
  const { data, isLoading, error, refetch } = useRandomUser({ seeds });
  return (
    <main className="h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-skyfall-done">Spy Grid 007</h1>
      {isLoading && (
        <div className="py-4">
          <Spinner />
        </div>
      )}
      {error && (
        <span className="text-red-500 text-2xl font-fira-mono p-6">
          {error}
        </span>
      )}
      {data && <SpyDetail spy={data} refetch={refetch} />}
    </main>
  );
}

export default App;
