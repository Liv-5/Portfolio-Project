import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Invalid email address";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //clear
    setFormData("");
    setErrors("");
  };

  return (
    <div className="container text-left ">
      <h1>Contact Me</h1>
      <form className="form-group mb-3" onSubmit={handleFormSubmit}>
        <input
          className="form-control mb-3"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          className="form-control mb-3"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea
          className="form-control mb-3"
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          placeholder="Your Message"
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        <button className="btn btn-primary btn-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
