type Props = {
  number: string;
  children: React.ReactNode;
  color?: string;
};

export function SectionHeader({ number, color, children }: Props) {
  return (
    <div className="relative flex flex-row items-center gap-8">
      <div className="flex justify-center items-center size-25 mb-6 bg-black rounded-full">
        <p className="relative mr-1 mt-1 limelight-regular text-white text-7xl">
          {number}
        </p>
      </div>
      <div className="mb-6">
        <h2 className="relative mb-4 kaushan-script-regular text-7xl">
          {children}
        </h2>
        <div className={`grow h-3 ${color || "bg-fuchsia-200"}`} />
      </div>
    </div>
  );
}
