type Props = {
  textColor?: string;
  textSize?: string;
  children: React.ReactNode;
};

export const Text = ({
  textColor = "mauve-900",
  textSize = "xl",
  children,
}: Props) => {
  return (
    <p
      className={`barlow-condensed font-normal text-${textSize} text-${textColor}`}
    >
      {children}
    </p>
  );
};
