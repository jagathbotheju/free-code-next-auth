"use client";

import { useSession } from "next-auth/react";

const AuthUser = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col justify-center text-center">
      <h2 className="text-3xl font-bold">{session?.user.name}</h2>
      <p className="text-lg font-semibold">{session?.user.role}</p>
    </div>
  );
};

export default AuthUser;
