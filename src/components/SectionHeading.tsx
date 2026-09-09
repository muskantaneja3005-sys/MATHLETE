export function SectionHeading({
  heading,
  supporting,
  align = "left",
}: {
  heading: string;
  supporting?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2
        className={`max-w-xl font-display text-3xl font-semibold leading-tight text-navy-700 sm:text-4xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {heading}
      </h2>
      {supporting && (
        <p className={`mt-3 max-w-xl text-navy-400 ${align === "center" ? "mx-auto" : ""}`}>
          {supporting}
        </p>
      )}
    </div>
  );
}
