type Props = {
  src: string;
  children?: React.ReactNode;
  mode?: "portrait" | "landscape";
  tapeStyle?: "top" | "bottom" | "diagonal";
};

export function Polaroid({
  src,
  children,
  mode = "portrait",
  tapeStyle,
}: Props) {
  const Tape = () => {
    const defaultStyles = "absolute w-50 h-10 bg-yellow-200 opacity-75";

    switch (tapeStyle) {
      case "top":
        return (
          <div
            className={`${defaultStyles} -top-5 left-1/2 -translate-x-1/2 -rotate-3`}
          />
        );
      case "bottom":
        return (
          <div
            className={`${defaultStyles} -bottom-5 left-1/2 -translate-x-1/2 rotate-3`}
          />
        );
      case "diagonal":
        return (
          <>
            <div className={`${defaultStyles} top-0 -left-10 rotate-160`} />
            <div
              className={`${defaultStyles} bottom-0 -right-15 rotate-150 w-30`}
            />
          </>
        );
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`relative flex flex-col justify-between gap-6 bg-mist-50 rounded-sm drop-shadow-lg p-5 lg:p-7
            ${mode === "portrait" ? "w-xs lg:w-sm h-120 lg:h-130" : "w-xl h-110"}`}
      >
        <Tape />
        <div className="w-full h-100 rounded-sm shadow-lg inverted-shadow overflow-hidden">
          <img src={src} className="w-full h-full object-cover object-top" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
