"use client";

import AuthUser from "@/components/AuthUser";
import UserMenu from "@/components/UserMenu";

const ClientMemberPage = () => {
  return (
    <div className="flex flex-col items-center p-24">
      <h3 className="text-3xl font-bold">Client Member Page</h3>
      <AuthUser />
    </div>
  );
};

export default ClientMemberPage;
