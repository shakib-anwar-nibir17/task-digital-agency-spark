import { LogoutAuth } from "@/app/actions";

const Logout = () => {
  return (
    <form action={LogoutAuth}>
      <button className="bg-blue-400 my-2 text-white p-1 rounded" type="submit">
        Logout
      </button>
    </form>
  );
};

export default Logout;
