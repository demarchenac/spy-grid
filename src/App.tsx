import { useState } from "react";
import { Spinner } from "./components/Spinner";
import { SpyDetail } from "./components/SpyDetail";
import { SpyInfoList } from "./components/SpyInfoList";
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
    setCurrentSpy(seed);
    toggleShowDetail(true);
  };

  const handleSpyDeselection = () => {
    currentSpy.reset();
    setCurrentSpy(null);
    toggleShowDetail(false);
  };

  // properly update error and loading ui.
  let dataIsLoading = isDetailShown ? currentSpy.isLoading : isLoading;
  let dataError = isDetailShown ? currentSpy.error : error;
  if (!seeds) {
    dataIsLoading = currentSpy.isLoading;
    dataError = currentSpy.error;
  }

  const renderWithSeeds = () => {
    if (dataIsLoading) {
      return <></>;
    }

    if (isDetailShown && currentSpy.data) {
      return (
        <SpyDetail
          spy={currentSpy.data}
          refetch={currentSpy.refetch}
          onNextSpy={goForward}
          onPreviousSpy={goBackwards}
          onGoBack={handleSpyDeselection}
        />
      );
    }

    if (!isDetailShown && data) {
      return <SpyInfoList spies={data} onSelectSpy={handleSpySelection} />;
    }

    return <></>;
  };

  const renderWithoutSeeds = () => {
    if (!currentSpy.data || currentSpy.isLoading) {
      return <></>;
    }

    return <SpyDetail spy={currentSpy.data} refetch={currentSpy.refetch} />;
  };

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-skyfall-done pb-2 pt-4">Spy Grid 007</h1>
      {dataIsLoading && (
        <div className="py-4">
          <Spinner />
        </div>
      )}
      {dataError && (
        <span className="text-red-500 text-2xl font-fira-mono p-6">
          {dataError}
        </span>
      )}
      {seeds ? renderWithSeeds() : renderWithoutSeeds()}
    </main>
  );
}

export default App;

// TODO: share w/ md.islam@pnmac.com ✅
