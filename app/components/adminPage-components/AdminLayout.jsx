import MainNavigation from "./MainNavigation";
import TopBar from "./TopBar";


const AdminLayout = ({ children, currentPath }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <MainNavigation currentPath={currentPath} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;