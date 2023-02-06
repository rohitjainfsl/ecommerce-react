import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="static-page contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className="form-group">
          <input
            type="text"
            {...register("firstName", { required: true })}
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your email"
          />
        </div>
        <div className="form-group">
          <textarea
            {...register("aboutYou", { required: true })}
            placeholder="Your Message"
          />
        </div>
        <p>{data}</p>
        <div className="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
