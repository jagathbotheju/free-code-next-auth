import AuthUser from "@/components/AuthUser";
import UserMenu from "@/components/UserMenu";
import React from "react";

const ServerMemberPage = () => {
  return (
    <div className="flex flex-col items-center p-24">
      <h1 className="text-3xl font-bold">Server Member Server</h1>
      <AuthUser />
    </div>
  );
};

export default ServerMemberPage;
