import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Form } from './../ContactForm/ContactForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-password-input"
          label="Enter username"
          type="text"
          name="name"
        />

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
          Register
        </Button>
      </Form>
    </Container>
  );
};
