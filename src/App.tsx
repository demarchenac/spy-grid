import { useEffect, useState } from "react";
import { Spinner } from "./components/Spinner";
import { SpyDetail } from "./components/SpyDetail";
import { SpyInfo } from "./components/SpyInfo";
import { SpyInfoList } from "./components/SpyInfoList";
import { useRandomUser } from "./hooks/useRandomUser";
import { useRandomUsers } from "./hooks/useRandomUsers";

interface AppProps {
  seeds?: string[] | null;
}

function App({ seeds = null }: AppProps = { seeds: null }) {
  const [isDetailShown, toggleShowDetail] = useState(false);
  const {
    data,
    isLoading,
    error,
    goBackwards,
    goForward,
    currentSpy,
    setCurrentSpy,
  } = useRandomUsers({ seeds });

  const handleSpySelection = (seed: string) => {
    currentSpy.reset();
    setCurrentSpy(seed);
    toggleShowDetail(true);
  };

  const handleSpyDeselection = () => {
    currentSpy.reset();
    setCurrentSpy(null);
    toggleShowDetail(false);
  };

  const dataIsLoading = isDetailShown ? currentSpy.isLoading : isLoading;
  const dataError = isDetailShown ? currentSpy.error : error;

  return (
    <main className="h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-skyfall-done">Spy Grid 007</h1>
      {dataIsLoading && (
        <div className="py-4">
          <Spinner />
        </div>
      )}
      {dataError && (
        <span className="text-red-500 text-2xl font-fira-mono p-6">
          {error}
        </span>
      )}
      {isDetailShown
        ? currentSpy.data && (
            <SpyDetail
              spy={currentSpy.data}
              refetch={currentSpy.refetch}
              onNextSpy={goForward}
              onPreviousSpy={goBackwards}
              onGoBack={handleSpyDeselection}
            />
          )
        : data && <SpyInfoList spies={data} onSelectSpy={handleSpySelection} />}
    </main>
  );
}

export default App;

// TOOD: share w/ md.islam@pnmac.com
