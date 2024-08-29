import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello world!</h1>
      <Link href="/users">Users</Link>
      <br />
      <Link href="/users/new">New User</Link>
      <br />
      <ProductCard />
      {/* <Link href="/products">Products</Link> */}
      <br />
    </main>
  );
}
