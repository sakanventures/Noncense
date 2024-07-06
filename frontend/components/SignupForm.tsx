import { useState } from 'react';

interface SignupFormProps {
  onSignup: (username: string, email: string, password: string) => void;
}

const SignupForm = ({ onSignup }: SignupFormProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    onSignup(username, email, password);
    // Optionally, you can reset form fields after signup attempt
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupForm;
