import { useForm } from "react-hook-form";

export const RegisterPages = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="Nombre"
        />
        <input
          {...register("Email")}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        <input
          {...register("firstName")}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md my-2"
          placeholder="password"
        />
        <input type="submit" className="my-4" />
      </form>
    </div>
  );
};
