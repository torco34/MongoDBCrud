import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../userContext/AuthContext";


export const RegisterPages = () => {
  const navigate = useNavigate();
  const { signup, authentication, error } = useAuth();
  console.log(error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (authentication) {
      console.log('Authentication status:', authentication);
      console.log('Navigating to /task');
      navigate('/login');
    }
  }, [authentication, navigate]);

  const onSubmit = async (values) => {
    signup(values);
  };
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md container">
      
      {error && error.length > 0 && (
        <div>
          {error.map((err, i) => (
            <div className="bg-red-400 text-white" key={i}>{err}</div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="Nombre"
        />
        {errors.username && (
  <p className="text-red-500">El nombre de usuario es requerido</p>
)}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
       {errors.email && (
  <p className="text-red-500">El email es requerido</p> 
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
       <div className="flex gap-x-2 justify-between">
       <input type="submit" className="my-4" />
       <p className="my-4"><Link to="/login" className="border p-2 rounded text-sky-400">Inicias sesión</Link></p>
       </div>
      </form>
     
    </div>
  );
};
