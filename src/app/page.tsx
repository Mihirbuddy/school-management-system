'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /admin after the component mounts
    router.push('/admin');
  }, [router]);

  return (
    <div>Redirecting to Admin...</div>
  );
}

export default Homepage;
