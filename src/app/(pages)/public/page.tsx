import AuthUser from "@/components/AuthUser";
import UserMenu from "@/components/UserMenu";

const PublicPage = () => {
  return (
    <div className="flex flex-col items-center p-24">
      <div className="text-3xl font-bold">Public Page</div>
      <AuthUser />
    </div>
  );
};

export default PublicPage;
