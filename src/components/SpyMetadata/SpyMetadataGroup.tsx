interface SpyMetadaGroupProps {
  children: JSX.Element | JSX.Element[];
}

export function SpyMetadataGroup({ children }: SpyMetadaGroupProps) {
  return <div className="w-full flex flex-col gap-1">{children}</div>;
}
