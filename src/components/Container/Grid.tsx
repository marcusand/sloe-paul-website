interface Props {
  children: React.ReactNode;
}

export const Grid: React.FC<Props> = ({ children }) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>;
};
