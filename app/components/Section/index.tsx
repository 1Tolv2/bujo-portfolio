type Props = {
  children: React.ReactNode;
};

export function Section({ children }: Props) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
