import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue using DocuMind"
    >
      <form className="space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button type="submit">
          Login
        </Button>
      </form>
    </AuthLayout>
  );
}