import styles from "./Input.module.css";

const Input = (props) => {
  const {
    children,
    labelStyle = { color: "#b0b9b9" },
    inputStyle = { color: "#fff" },
    attribute = {},
    id,
  } = props;

  return (
    <div className={styles.wrapper}>
      <input
        {...attribute}
        className={styles.input}
        id={id}
        style={inputStyle}
        autoComplete="off"
        placeholder=" "
      />
      <label htmlFor={id} className={styles.label} style={labelStyle}>
        {children}
      </label>
    </div>
  );
};

export default Input;
