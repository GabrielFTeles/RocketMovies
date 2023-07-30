import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/404';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}/>
      <Route path="/register" element={<SignUp />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}