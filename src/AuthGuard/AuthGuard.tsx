import React, { ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../AuthProvider';

interface AuthGuardProps {
  children: ReactNode;
}
export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // Если пользователь не аутентифицирован, перенаправляем его на страницу входа
      router.push(`/login?from=${encodeURIComponent(router.asPath)}`);
    }
  }, [isAuthenticated, router]);

  // Если пользователь аутентифицирован, отображаем дочерние компоненты
  return isAuthenticated ? children : null;
};
