import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world!</h1>
      <Link href="/users">Users</Link>
      <Link href="/users/new">New User</Link>
    </main>
  );
}
