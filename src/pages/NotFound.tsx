import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-28 text-center">
      <p className="font-display text-6xl text-gold-600">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-navy-700">Page not found</h1>
      <p className="mt-2 max-w-sm text-navy-400">
        The page you're looking for doesn't exist. Let's get you back on track.
      </p>
      <Link to="/" className="mt-6 rounded-full bg-navy-700 px-6 py-3 text-[15px] font-medium text-cream hover:bg-navy-600">
        Back to Home
      </Link>
    </div>
  );
}
