import Link from "next/link"

export default function Headbar() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link href="/">Instrument Store</Link></h1>
        <Link href="/cart" className="text-white underline">Cart</Link>
      </div>
    </header>
  );
}