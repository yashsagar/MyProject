export const validation = ({ userName, email, password }) => {
  const isNameValid = /^[A-Za-z]+([\ A-Za-z]+)$/.test(userName);
  const isEmailValid = /^[a-zA-Z0-9][\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (isNameValid && isEmailValid && isPasswordValid) {
    return "true";
  } else {
    return { isNameValid, isEmailValid, isPasswordValid };
  }
};

// Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.
