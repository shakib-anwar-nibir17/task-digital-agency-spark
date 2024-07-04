import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="border border-white px-10 py-32 space-y-10">
        <h1 className="text-4xl">Signin Options</h1>
        <LoginForm />
      </div>
    </div>
  );
}
