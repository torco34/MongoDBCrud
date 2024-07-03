
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../userContext/AuthContext";


export const LoginPages = () => {
  const navigate = useNavigate();
  const { login,  error, authentication} = useAuth();
  console.log(error?.message);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  useEffect(() => {
    if (authentication) {
      navigate('/addTask');
    }
  }, [authentication, navigate]);
  const onSubmit = async (values) => {
   await login(values);
    console.log(values, "values");
  };
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md container">
      
     <h3 className="fw-bold">Login</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
     
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
       {errors.email && (
 
  <div className="bg-red-400 text-white">
     <p className="text-red-500">El email es requerido</p>{error.password}</div>
)}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="password"
        />
        {errors.password && (
          <p className="text-red-500"> username is required</p>
        )}
        <input type="submit" className="my-4 flex border text-sky-500 px-5 p-2 rounded" />
      </form>
      {error && error.length > 0 && (
        <div>
          {error.map((err, i) => (
            <div className="bg-red-400 text-white" key={i}>{err}</div>
          ))}
        </div>
      )}

      <p className="flex gap-x-2 justify-between">No te has registrado <Link to="/register" className="p-2 border rounded text-sky-500 ">Registrarse </Link></p>
    </div>
  );
};
-2