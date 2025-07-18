import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useState } from 'react';

export default function App() {
  const [description, setDescription] = useState('');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for sending data to Nocobase
    alert(`Submitted: ${description}`);
  };
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <SignedOut>
        <SignInButton>Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <h1>HVAC Service Request</h1>
        <form onSubmit={submit}>
          <textarea
            style={{ width: '100%', height: '100px' }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </SignedIn>
    </main>
  );
}
