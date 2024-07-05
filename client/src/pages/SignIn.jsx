import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
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
      const res = await fetch("/api/auth/signin", {
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
      navigate("/");
      // console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-4">Sign In</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
          {loading ? "loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-teal-700 font-semibold">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{"Incorrect credentials"}</p>}
    </div>
  );
}
