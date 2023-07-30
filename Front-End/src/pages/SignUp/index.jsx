import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Container, FormWrapper, Form, Background } from './styles';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { LinkButton } from '../../components/LinkButton';
import { toast } from 'react-toastify';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSingUp() {
    if (!name || !email || !password) {
      toast.error("Please enter a name, password and email address!");
    }

    api.post('/users', {
      name,
      email,
      password
    })
      .then(response => {
        toast.success("Account successfully created.");
        navigate('/');
      })
      .catch(error => {
        if(error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Can't create users. Please try again later.");
        }
      })
  }

  return (
    <Container>
      <FormWrapper>
        <Form>
          <header>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
          </header>

          <div className="logon">
            <h2>Crie sua conta</h2>

            <Input
              type="text"
              placeholder="Nome"
              icon={FiUser}
              onChange={e => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="E-mail"
              icon={FiMail}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              icon={FiLock}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              title="Cadastrar"
              onClick={handleSingUp}
            />
          </div>

          <LinkButton 
            text="Voltar para o login"
            icon={FiArrowLeft}
            route="/"
          />
        </Form>
      </FormWrapper>

      <Background />
    </Container>
  )
}