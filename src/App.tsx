import { Spinner } from "./components/Spinner";
import { SpyDetail } from "./components/SpyDetail";
import { useRandomUser } from "./hooks/useRandomUser";

function App() {
  const { data, isLoading, error } = useRandomUser();
  return (
    <main className="h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-skyfall-done">Spy Grid 007</h1>
      {isLoading && (
        <div className="py-4">
          <Spinner />
        </div>
      )}
      {data && <SpyDetail spy={data} />}
    </main>
  );
}

export default App;
