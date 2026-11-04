import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <ul className="flex items-center justify-end pe-4 space-x-4">
        <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
        <li><Link href="/service" className="hover:text-blue-300">Service</Link></li>
        <li><Link href="/me" className="hover:text-blue-300">Me</Link></li>
      </ul>
    </nav >
  );
}