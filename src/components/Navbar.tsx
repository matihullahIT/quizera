import { Navbar as navItems } from "../constants"; // Renaming import to avoid conflict

const Navbar = () => {
  return (
    <div className="bg-white h-full fixed text-blue-700 font-semibold border border-gray-300 px-6 py-3 w-64 overflow-y-auto">
      {navItems.map((item: { icon: JSX.Element; label: string }, index: number) => (
        <div
          className="border-b border-gray-300 px-4 py-3 transition-all hover:bg-blue-700 hover:text-white cursor-pointer flex items-center gap-2"
          key={index}
        >
          {item.icon} 
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
