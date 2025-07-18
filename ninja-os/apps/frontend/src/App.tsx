import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export default function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <SignedOut>
        <h1>Welcome to Ninja OS</h1>
        <SignInButton>Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <h1>Dashboard</h1>
        {/* Replace with actual components that connect to Nocobase */}
        <p>Nocobase data and workflows go here.</p>
      </SignedIn>
    </main>
  );
}
