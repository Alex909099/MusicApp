import { useRouteError } from 'react-router';

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
} 