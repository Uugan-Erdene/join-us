export const FormInput = (props) => {
  const { inputTag, handleChange, name, value, error } = props;

  return (
    <div style={{ paddingTop: "24px" }}>
      <div>
        <div className="first">
          <h1>{inputTag} *</h1>
        </div>
        <input
          className={error ? "input-error" : "step"}
          name={name}
          value={value}
          placeholder="Placeholder"
          onChange={handleChange}
        />
        {error && (
          <div style={{ color: "red" }}>
            {inputTag} cannot contain special characters or numbers.
          </div>
        )}
      </div>
    </div>
  );
};
