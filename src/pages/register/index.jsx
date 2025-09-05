import React from "react";
import { useGetValues } from "../../hooks/useGetValues";

const initialState = {
  first_name: "",
  last_name: "",
  birthday_day: "",
  birthday_month: "",
  birthday_year: "",
  gender: "",
  phone_or_email: "",
  password: "",
};

const Register = () => {
  const { formData, handleChange, setFormData } = useGetValues(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData(initialState);
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-100">
      <h1 className="text-center text-4xl font-bold text-blue-600 mb-14">
        My App
      </h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-center text-xl font-semibold ">
          Создайте новый аккаунт
        </h2>
        <p className="text-center text-sm text-gray-500 mb-4 border-b pb-4">
          Это быстро и просто.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Имя"
              className="w-1/2 border rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Фамилия"
              className="w-1/2 border rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <label className="block text-xs text-gray-500 mt-2">
            Дата рождения
          </label>
          <div className="flex gap-2">
            <select
              name="birthday_day"
              value={formData.birthday_day}
              onChange={handleChange}
              className="w-1/3 border rounded-md p-2 text-sm"
            >
              <option value="">День</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
            <select
              name="birthday_month"
              value={formData.birthday_month}
              onChange={handleChange}
              className="w-1/3 border rounded-md p-2 text-sm"
            >
              <option value="">Месяц</option>
              <option>сен</option>
              <option>окт</option>
              <option>нояб</option>
            </select>
            <select
              name="birthday_year"
              value={formData.birthday_year}
              onChange={handleChange}
              className="w-1/3 border rounded-md p-2 text-sm"
            >
              <option value="">Год</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>

          <label className="text-xs text-gray-500 mt-2">Пол</label>
          <div className="flex gap-2">
            <label className="flex-1 border rounded-md p-2 flex items-center justify-between">
              Женщина
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
            </label>
            <label className="flex-1 border rounded-md p-2 flex items-center justify-between">
              Мужчина
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
            </label>
          </div>

          <input
            type="text"
            name="phone_or_email"
            value={formData.phone_or_email}
            onChange={handleChange}
            placeholder="Номер мобильного телефона или эл. адрес"
            className="w-full border rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Новый пароль"
            className="w-full border rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
          />

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-[50%]  bg-green-600 text-white rounded-md py-2 font-semibold mt-2 cursor-pointer"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>

        <p className="text-center text-blue-600 text-sm mt-4 hover:underline cursor-pointer">
          У вас уже есть аккаунт?
        </p>
      </div>
    </div>
  );
};

export default Register;
