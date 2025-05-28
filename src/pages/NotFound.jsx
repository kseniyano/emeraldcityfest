// src/pages/NotFound.jsx
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-emerald text-9xl font-bold">404</h1>
      <h4 className="mb-6">Что-то пошло не так</h4>
      <a href="/" className="btn">Вернуться на главную</a>
    </div>
  );
}
