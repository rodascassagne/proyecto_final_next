import HHLogo from '@/app/components/handcraftedhavenlogo';
import LoginForm from '@/app/components/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Login',
};

export default function LoginPage() {
  return (
    <div className="m-auto flex w-full max-w-[400px] items-center md:min-h-[78vh]">
      <LoginForm />
    </div>
  );
}
