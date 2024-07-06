import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const jwt = Cookies.get('jwt');

  if (!jwt) {
    // Redirect to login if JWT token is not present
    router.push('/login');
    return null;
  }

  // Render protected content if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
