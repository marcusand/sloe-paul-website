interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="content-container h-full flex flex-col p-4 relative">{children}</div>
  );
};
