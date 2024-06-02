import { auth } from '@/auth';
import Navbar from './navbar';

export default async function NavBarWrapper() {
  const session = await auth();

  return <Navbar loggedInUser={session?.user ? session.user : null} />;
}
