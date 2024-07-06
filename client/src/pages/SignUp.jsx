import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";import OAuth from "../components/OAuth";
export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      // toast.success("Account Created successfully");
      navigate("/sign-in");
      // console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-4">Sign Up</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          placeholder="Enter username"
          className="border p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          type="eamil"
          id="email"
          placeholder="Enter email"
          className="border p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Enter password"
          className="border p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-teal-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "loading..." : "Sign Up"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-teal-700 font-semibold">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{"User already exists"}</p>}
    </div>
  );
}
