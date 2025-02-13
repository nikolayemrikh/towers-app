import { FC, useContext } from 'react';

import { Navigate, Outlet, Route, Routes as RouterRoutes } from 'react-router-dom';

import { SignInPage } from '@app/Auth/SignInPage';
import { SignUpPage } from '@app/Auth/SignUpPage';
import { Board } from '@app/Board';
import { Lobby } from '@app/Lobby';

import { AuthContext } from '../context/AuthContext';

const DetectRoute: FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/lobby" /> : <Navigate to="/sign-in" />;
};

const AuthRoute: FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

const NotAuthenticatedRoute: FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/lobby" /> : <Outlet />;
};

export const Routes: FC = () => {
  return (
    <RouterRoutes>
      <Route element={<AuthRoute />}>
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/board/:id" element={<Board />} />
      </Route>
      <Route element={<NotAuthenticatedRoute />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<DetectRoute />} />
    </RouterRoutes>
  );
};
