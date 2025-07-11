import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [submittedData, setSubmittedData] = useState({});

  const submit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "" || form.password === "") {
      setError("Please fill in all fields!");
    } else {
      setError("");
    }

    setSubmittedData(form);
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={submit}>
        <p>name</p>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <p>email</p>
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <p>password</p>
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br />
        <br />
        <button
          // disabled={
          //   form.name === "" || form.email === "" || form.password === ""
          // }
        >
          submit
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <form action="">
        <p>name : {submittedData.name}</p>
        <p>email : {submittedData.email}</p>
        <p>password : {submittedData.password}</p>
      </form>
    </>
  );
};

export default Form;
