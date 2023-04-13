import { RandomUser } from "../../types/randomUser";
import { SpyInfo } from "../SpyInfo/SpyInfo";

interface SpyInfoListProps {
  spies: RandomUser[] | null;
  onSelectSpy: (seed: string) => void;
}

export function SpyInfoList({ spies, onSelectSpy }: SpyInfoListProps) {
  return (
    <ul className="border border-gray-100 p-5 flex flex-col gap-4 mt-6 rounded-md">
      {spies?.map((spy) => (
        <SpyInfo key={spy.username} spy={spy} onSelect={onSelectSpy} />
      ))}
    </ul>
  );
}
