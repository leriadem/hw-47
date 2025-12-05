import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    alert("Форма успішно відправлена!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Реєстрація</h2>

      {/* Ім'я */}
      <div>
        <label>Ім'я:</label>
        <input
          type="text"
          {...register("name", {
            required: "Поле обов'язкове",
            minLength: {
              value: 2,
              message: "Мінімум 2 символи",
            },
          })}
        />
        {errors.name && (
          <p style={{ color: "red" }}>{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label>Електронна пошта:</label>
        <input
          type="email"
          {...register("email", {
            required: "Поле обов'язкове",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Некоректна електронна пошта",
            },
          })}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
      </div>

      {/* Пароль */}
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          {...register("password", {
            required: "Поле обов'язкове",
            minLength: {
              value: 6,
              message: "Пароль має містити мінімум 6 символів",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Відправити</button>
    </form>
  );
}
