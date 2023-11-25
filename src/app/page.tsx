import AuthUser from "@/components/AuthUser";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <AuthUser />
    </main>
  );
}
