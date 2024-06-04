import Link from 'next/link';

export default function SignupButton() {
  return (
    <Link
      href="/signup"
      className="rounded-lg bg-dark px-4 py-2 text-center text-sm  font-medium text-light  transition-colors hover:italic hover:text-dark hover:outline hover:outline-1 hover:outline-brown dark:focus:ring-dark md:text-base"
    >
      Sign up
    </Link>
  );
}
