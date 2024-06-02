import HHLogo from '@/app/components/handcraftedhavenlogo';
import LoginForm from '@/app/components/login-form';
import { Metadata } from 'next';
import SignupForm from '../components/signup/signup-form';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Signup',
};

export default function LoginPage() {
  return (
    <div className="m-auto flex w-full max-w-[400px] items-center md:min-h-[78vh]">
      <SignupForm />
    </div>
  );
}
