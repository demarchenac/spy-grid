interface SpyMetadataProps {
  title: string;
  value: string;
}

export function SpyMetadata({ title, value }: SpyMetadataProps) {
  const capitalized = title.charAt(0).toUpperCase() + title.substring(1);

  return (
    <p className="pl-2">
      <span>
        <b>{capitalized}:</b>
      </span>
      {` ${value}`}
    </p>
  );
}
