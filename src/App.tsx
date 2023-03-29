import { useRandomUser } from "./hooks/useRandomUser.tsx";

function App() {
  const { data } = useRandomUser();
  console.log({ data });
  return (
    <div className="h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-skyfall-done">Spy Grid 007</h1>
    </div>
  );
}

export default App;
