import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

import { toast } from 'react-toastify';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      
      const { user, token } = response.data;

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      localStorage.setItem('@rocketmovies:token', token);

      setData({ user, token });
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return user;

    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Can't sign in, please try again.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:token');
    localStorage.removeItem('@rocketmovies:user');

    toast("👋 You have been signed out.");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user);
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      
      setData({ user, token: data.token });

      toast.success("Profile was updated successfully!");

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Can't update profile, please try again.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketmovies:token');
    const user = JSON.parse(localStorage.getItem('@rocketmovies:user'));

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ token, user });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };