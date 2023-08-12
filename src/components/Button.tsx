interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({
  children,
  onClick = () => null,
  className = "",
}) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};
