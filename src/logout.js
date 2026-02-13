import { useNavigate } from 'react-router-dom';

/**
 * A functional component or utility to handle logout logic.
 * This clears the localStorage and redirects the user to the landing page.
 */
const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Clear all session data
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    
    // Optional: Clear all if you want to be thorough
    // localStorage.clear();

    // Redirect to the home page or login page
    navigate('/');
  };

  return logout;
};

export default useLogout;