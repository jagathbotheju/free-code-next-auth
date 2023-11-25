import AuthUser from "@/components/AuthUser";
import UserMenu from "@/components/UserMenu";

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center p-24">
      <h1 className="text-3xl font-bold">AdminPage</h1>
      <AuthUser />
    </div>
  );
};

export default AdminPage;
