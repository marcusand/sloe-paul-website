interface Props {
  children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="content-container bg-alpha opacity-90 flex justify-center items-center py-2 mb-4 uppercase">
      <div className="underline italic text-2xl">{children}</div>
    </div>
  );
};
