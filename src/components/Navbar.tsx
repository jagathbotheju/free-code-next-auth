import Link from "next/link";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <header className="bg-gray-600 text-gray-100">
      <div className="flex justify-between items-center w-full px-10 py-4">
        <h1 className="text-2xl font-bold">Next Auth</h1>

        <div className="flex gap-10 items-center">
          <Link href="/">Home</Link>
          <Link href="/create-user">Create User</Link>
          <Link href="/client-member">Client Member</Link>
          <Link href="/server-member">Server Member</Link>
          <Link href="/public">Public</Link>
          <Link href="/admin">Admin</Link>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
