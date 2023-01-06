import React from "react";
import Button from "../Button";

const TextInput = ({
  name,
  type,
  onChange,
  placeholder,
  value,
  label,
  handleUpload,
}) => {
  return (
    <div
      className={
        type != "file"
          ? `d-flex flex-column align-items-start`
          : "d-flex flex-row align-items-start"
      }
    >
      {type != "file" ? <label className="form-label">{label}</label> : ""}
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {type == "file" ? (
        <Button variant={"btn-green"} action={handleUpload}>
          Upload
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextInput;
