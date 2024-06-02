import { logOut } from '../lib/actions';

export default function LogoutButton() {
  return (
    <form action={logOut} className="w-full">
      <button
        type="submit"
        className="w-full flex-shrink-0 whitespace-nowrap rounded-lg bg-brown px-4 py-2 text-sm font-medium  text-light transition-colors hover:italic hover:text-dark hover:outline hover:outline-1 hover:outline-brown dark:focus:ring-dark md:text-base "
      >
        <span className="hover:text-dark">Log out</span>
      </button>
    </form>
  );
}
