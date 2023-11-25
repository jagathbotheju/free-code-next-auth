import Container from "@/components/Container";
import FormWrap from "@/components/FormWrap";
import RegisterForm from "./RegisterForm";

const LoginPage = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  );
};

export default LoginPage;
