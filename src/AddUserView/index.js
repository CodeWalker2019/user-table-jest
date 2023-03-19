import { useState, memo } from "react";
import style from "./style.module.css";

const AddUserView = ({ addUser }) => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleUpdateForm = (event) => {
    event.preventDefault();
    const { value, id } = event.target;
    setForm((form) => ({ ...form, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(form);
  };

  return (
    <form onSubmit={handleSubmit} className={style.addUserForm}>
      <div className={style.addUserFieldContainer}>
        <label htmlFor="email">email</label>
        <input
          onChange={handleUpdateForm}
          value={form.email}
          type="email"
          id="email"
        />
      </div>
      <div className={style.addUserFieldContainer}>
        <label htmlFor="name">username</label>
        <input id="name" value={form.name} onChange={handleUpdateForm} />
      </div>
      <button className={style.submitNewUserButton} type="submit">
        Add User
      </button>
    </form>
  );
};

export default memo(AddUserView);
