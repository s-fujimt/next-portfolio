import Link from "next/link";
import { MY_NAME } from "../lib/constants";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-neutral-900 hover:text-neutral-500 transition-colors duration-200 inline-block py-2 whitespace-nowrap uppercase text-lg md:text-xl font-black first-letter:text-red-600"
    >
      {MY_NAME}
    </Link>
  );
}
