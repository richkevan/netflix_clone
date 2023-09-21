const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      </div>
    </div>
  );
};

export default ErrorPage;

export function loader() {
  return <h1>Loader</h1>;
} 