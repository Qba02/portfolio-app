import { LoginForm } from "@components";

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 h-1/2">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
