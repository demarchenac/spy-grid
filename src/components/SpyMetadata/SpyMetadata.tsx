interface SpyMetadataProps {
  title: string;
  value: string;
  type?: "text" | "color";
}

export function SpyMetadata({ title, value, type = "text" }: SpyMetadataProps) {
  const capitalized = title.charAt(0).toUpperCase() + title.substring(1);

  return (
    <div className="flex gap-2 pl-2 align-center">
      <span>
        <b>{capitalized}:</b>
      </span>
      {type === "text" ? (
        ` ${value}`
      ) : (
        <div
          className={`${value} w-20 h-3 self-center`}
          title={`${value.split("-")[1]}`}
        />
      )}
    </div>
  );
}
