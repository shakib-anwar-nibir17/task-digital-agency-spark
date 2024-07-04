import { SocialLogin } from "@/app/actions";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    <form action={SocialLogin} className="flex justify-center gap-4">
      <button
        className="bg-white text-black px-6 py-4 rounded-lg flex items-center gap-2"
        type="submit"
        name="action"
        value="google"
      >
        <FaGoogle size={24} />
        Sign in with Google
      </button>
    </form>
  );
};

export default LoginForm;
