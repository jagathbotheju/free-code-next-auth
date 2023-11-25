import AuthUser from "@/components/AuthUser";
import UserMenu from "@/components/UserMenu";

const CreateUser = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-24">
      <h3 className="text-3xl font-bold">Create User</h3>
      <h3 className="text-3xl font-bold">Only Admin access</h3>
      <AuthUser />
    </div>
  );
};

export default CreateUser;
