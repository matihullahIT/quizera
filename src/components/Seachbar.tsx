interface SearchbarProps {
  children?: React.ReactNode; // Made children optional
}

const Searchbar = ({ children }: SearchbarProps) => {
  return (
    <div className="flex items-center justify-center w-full py-5 bg-blue-700">
      {children || <span className="text-white">No search content provided</span>}
    </div>
  );
};

export default Searchbar;
