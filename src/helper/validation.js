export const validation = (data) => {
  const errors = {};

  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!data.username.trim()) {
    errors.username = "can't be blank";
  } else if (data.username.length < 3) {
    errors.username = "username is short";
  } else {
    delete errors.username;
  }

  if (!data.email.length) {
    errors.email = "can't be blank";
  } else if (!data.email.match(validEmail)) {
    errors.email = "wrong format";
  } else {
    delete errors.email;
  }

  if (!data.password.length) {
    errors.password = "can't be blank";
  } else if (data.password.length < 6) {
    errors.password = "password is short";
  } else {
    delete errors.password;
  }

  if (!data.confirmpassword.length) {
    errors.confirmpassword = "can't be blank";
  } else if (data.password !== data.confirmpassword) {
    errors.confirmpassword = "password not match";
  } else {
    delete errors.confirmpassword;
  }

  if (!data.checkbox) {
    errors.checkbox = "not accept";
  } else {
    delete errors.checkbox;
  }

  return errors;
};
