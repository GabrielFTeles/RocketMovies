import { useState } from 'react';

import debounce from 'lodash.debounce';

import { Container, FormWrapper, Form, Background } from './styles';

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { LinkButton } from '../../components/LinkButton';

import { ThreeDots } from  'react-loader-spinner';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email || !password) return;
    debounceSignIn();
  }

  const debounceSignIn = debounce(() => {
    setLoading(true);

    signIn({ email, password })
      .then((user) => toast(`👋 Bem vindo ${user.name}!`))
      .finally(() => setLoading(false));
  }, 300);

  return (
    <Container>
      <FormWrapper>
        <Form>
          <header>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
          </header>

          <div className="logon">
            <h2>Faça seu login</h2>

            <Input
              type="email"
              placeholder="E-mail"
              icon={FiMail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              icon={FiLock}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              title={loading ? <ThreeDots 
                height="40" 
                width="40" 
                radius="9"
                color="#1C1B1E" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              /> : "Entrar"}
              disabled={loading}
              onClick={handleSignIn}
            />
          </div>

          <LinkButton
            text="Criar conta"
            route="/register"
          />
        </Form>
      </FormWrapper>

      <Background />
    </Container>
  )
}