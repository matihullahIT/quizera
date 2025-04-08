import Navbar from "./Navbar";
import Searchbar from "./Seachbar"; // Ensure the correct file name is used
import { ReactNode } from "react";

interface LayoutProps {
  navbar: Array<{ link: string; label: string; icon: JSX.Element }>; // Adjusted type for navbar
  children: ReactNode;
  search: ReactNode;
}

const Layout = ({ navbar, children, search }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar/Navbar */}
      <div className="w-1/5 bg-blue-700 text-white">
        <Navbar navbarelements={navbar} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Searchbar */}
        <div className="w-full">
          <Searchbar>{search}</Searchbar>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
