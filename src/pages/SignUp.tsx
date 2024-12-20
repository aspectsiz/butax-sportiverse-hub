import { SignUpForm } from "@/components/auth/signup/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-auth-muted flex flex-col items-center justify-center auth-layout">
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <div className="auth-card p-6 rounded-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Sign up for a new account</p>
          </div>
          <SignUpForm />
        </div>
      </main>
    </div>
  );
};

export default SignUp;