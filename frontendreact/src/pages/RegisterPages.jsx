import { useForm } from "react-hook-form";
import { useAuth } from "../userContext/AuthContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export const RegisterPages = () => {
  const { signup, authentication, error } = useAuth();
  console.log(error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (authentication) Navigate("/tasks");
  }, [authentication]);

  const onSubmit = async (values) => {
    signup(values);
  };
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md container">
      
      {error.map((error, i) => (
        <div className="bg-red-400 text-white"key={i}>{error}</div>
      ))}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="Nombre"
        />
        {errors.username && (
          <p className="text-red-500"> username is required</p>
        )}
        <input
          type="email"
          {...register("email")}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        {errors.username && (
          <p className="text-red-500"> username is required</p>
        )}
        <input
          type="password"
          {...register("password")}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="password"
        />
        {errors.username && (
          <p className="text-red-500"> username is required</p>
        )}
        <input type="submit" className="my-4" />
      </form>
    </div>
  );
};
