"use client"
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (user) {
    console.log(user);
  }

  return (
    <div className="">
      <p>Welcome to the root page</p>
    </div>
  );
}
