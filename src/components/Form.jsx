import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { PiPencilSimpleLine } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
const Form = () => {
  return (
    <form className="form-control  bg-transparent">
      <label className="input text-sm flex items-center gap-4">
        <MdOutlinePerson className="" />
        <input type="text" placeholder="Your Name" className="grow" />
      </label>
      <label className="input text-sm flex items-center gap-4">
        <AiOutlineMail className="" />
        <input type="email" placeholder="Your email" className="grow" />
      </label>
      <label className="input text-sm flex items-center gap-4">
        <PiPencilSimpleLine className="" />
        <input type="text" placeholder="Your subject here" className="grow" />
      </label>
      <div className="textarea-container">
        <GoPencil className="pencil text-sm" />
        <textarea
          placeholder="Your message here"
          className="textarea grow"
        ></textarea>
      </div>
      <button type="submit" className="btn  border-none  text-white bg-violet-500">Send message</button>
    </form>
  );
};

export default Form;
