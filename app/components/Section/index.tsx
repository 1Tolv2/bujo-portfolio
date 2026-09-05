type Props = {
  children: React.ReactNode;
};

export function Section({ children }: Props) {
  return (
    <div className="w-full lg:min-h-screen flex flex-col lg:justify-center items-center">
      {children}
    </div>
  );
}
