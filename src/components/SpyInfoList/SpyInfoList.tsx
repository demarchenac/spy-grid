import { RandomUser } from "../../types/randomUser";
import { SpyInfo } from "../SpyInfo/SpyInfo";

interface SpyInfoListProps {
  spies: RandomUser[] | null;
  onSelectSpy: (seed: string) => void;
}

export function SpyInfoList({ spies, onSelectSpy }: SpyInfoListProps) {
  return (
    <ul>
      {spies?.map((spy) => (
        <SpyInfo key={spy.username} spy={spy} onSelect={onSelectSpy} />
      ))}
    </ul>
  );
}
