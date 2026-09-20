type Props = {
  textColor?: string;
  textSize?: string;
  children: React.ReactNode;
};

export const Text = ({
  textColor = "text-mauve-900",
  textSize = "text-xl",
  children,
}: Props) => {
  return (
    <p className={`barlow-condensed font-normal ${textSize} ${textColor}`}>
      {children}
    </p>
  );
};
