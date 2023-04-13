import { RandomUser } from "../../types/randomUser";

interface SpyInfoProps {
  spy: RandomUser;
  onSelect: (seed: string) => void;
}

export function SpyInfo({ spy: { username, seed }, onSelect }: SpyInfoProps) {
  const handleClick = () => {
    if (!seed) {
      alert("This spy cannot be selected");
      return;
    }
    onSelect(seed);
  };
  return (
    <li
      className="cursor-pointer hover:bg-slate-600 p-2 rounded-md transition-all ease-in"
      onClick={handleClick}
    >
      {username}
    </li>
  );
}
