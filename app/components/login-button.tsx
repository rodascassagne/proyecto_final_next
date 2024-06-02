import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link
      href="/login"
      className="rounded-lg bg-brown px-4 py-2 text-center text-sm  font-medium text-light  transition-colors hover:italic hover:text-dark hover:outline hover:outline-1 hover:outline-brown dark:focus:ring-dark md:text-base"
    >
      Login
    </Link>
  );
}
