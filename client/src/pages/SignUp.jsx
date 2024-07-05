import {Link} from "react-router-dom";
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-4">Sign Up</h1>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          className="border p-3 rounded-lg"
        />
        <input
          type="eamil"
          id="email"
          placeholder="Enter email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-teal-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          SignUp
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-teal-700 font-semibold">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
