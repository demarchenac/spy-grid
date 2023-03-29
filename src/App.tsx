import { useRandomUser } from "./hooks/useRandomUser.tsx";

function App() {
  const { data } = useRandomUser();
  console.log({ data });
  return (
    <div className="h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">App Page!</h1>
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
