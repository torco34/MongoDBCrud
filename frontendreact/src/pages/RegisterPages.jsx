import { useForm } from "react-hook-form";

export const RegisterPages = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"
          {...register("username", {required: true})}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md"
        />
        <input
          {...register("firstName")}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md"
        />
        <input
          {...register("firstName")}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md"
        />
        <input
          {...register("firstName")}
          className="w-full bg-zinc-700 text-left px-4 py-2 rounded-md"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
