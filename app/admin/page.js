import AdminLayout from "../components/adminPage-components/AdminLayout";
import Dashboard from "../components/adminPage-components/Dashboard";

const DashboardPage = () => {
  return (
    <AdminLayout currentPath="/admin">
      <Dashboard />
    </AdminLayout>
  );
};

export default DashboardPage;