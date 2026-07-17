import Link from "next/link";
import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Join DocuMind and start chatting with your documents"
    >
      <form className="space-y-5">

        <Input
          label="Full Name"
          placeholder="Enter your full name"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
        />

        <Button type="submit">
          Create Account
        </Button>
        <p className="text-center text-slate-600">
  Already have an account?{" "}
  <Link
    href="/login"
    className="text-blue-600 font-semibold hover:underline"
  >
    Login
  </Link>
</p>

      </form>
    </AuthLayout>
  );
}