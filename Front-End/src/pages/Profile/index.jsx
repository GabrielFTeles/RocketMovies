import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container, Form, Avatar } from './styles';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import {
  FiArrowLeft,
  FiCamera,
  FiUser,
  FiMail,
  FiLock
} from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { LinkButton } from '../../components/LinkButton';

export function Profile() {
  const { updateProfile, user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <div className="content">
        <LinkButton 
          text="Voltar"
          icon={FiArrowLeft}
          route="/"
        />

        </div>
      </header>

      <main>
        <Form>
          <Avatar>
            <img 
              src={avatar} 
              alt="Foto do usuário" 
            />

            <label htmlFor="avatar">
              <FiCamera />
              <input 
                id="avatar"
                type="file"
                onChange={handleChangeAvatar}
              />
            </label>
          </Avatar>

          <div className="input-wrapper">
            <Input 
              placeholder="Nome"
              type="text"
              icon={FiUser}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input 
              placeholder="E-mail"
              type="email"
              icon={FiMail}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <Input 
              placeholder="Senha atual"
              type="password"
              icon={FiLock}
              onChange={e => setOldPassword(e.target.value)}
            />
            <Input 
              placeholder="Nova senha"
              type="password"
              icon={FiLock}
              onChange={e => setNewPassword(e.target.value)}
            />
          </div>

          <Button 
            title="Salvar"
            onClick={handleUpdate}
          />
        </Form>
      </main>
    </Container>
  )
}