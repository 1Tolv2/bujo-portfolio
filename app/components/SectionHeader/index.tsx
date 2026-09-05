type Props = {
  number: string;
  children: React.ReactNode;
  color?: string;
};

export function SectionHeader({ number, color, children }: Props) {
  return (
    <div className="relative flex flex-row items-center mb-2 sm:mb-4 lg:mb-0 gap-4 lg:gap-8">
      <div className="flex justify-center items-center size-10 sm:size-14 lg:size-25 lg:mb-6 bg-black rounded-full">
        <p className="relative lg:mr-1 mt-0.5 lg:mt-1 limelight-regular text-white text-2xl sm:text-4xl lg:text-7xl">
          {number}
        </p>
      </div>
      <div className="mb-2 lg:mb-6">
        <h2 className="relative mb-1 lg:mb-4 kaushan-script-regular text-4xl sm:text-5xl lg:text-7xl">
          {children}
        </h2>
        <div className={`grow h-1 lg:h-3 ${color || "bg-fuchsia-200"}`} />
      </div>
    </div>
  );
}
