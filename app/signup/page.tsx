import { Metadata } from 'next';
import SignupForm from '../components/signup/signup-form';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Signup',
};

export default function LoginPage() {
  return (
    <div >
      <SignupForm />
    </div>
  );
}
