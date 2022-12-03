import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form } from './../ContactForm/ContactForm.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="outlined-password-input"
        label="Enter email"
        type="email"
        name="email"
      />
      <TextField
        id="outlined-password-input"
        label="Enter password"
        type="password"
        name="password"
      />

      <Button variant="contained" type="submit">
        Log In
      </Button>
    </Form>
  );
};
