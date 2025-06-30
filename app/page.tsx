'use client';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form className="w-full max-w-sm space-y-4 rounded bg-white p-6 shadow">
        <h2 className="text-center text-xl font-semibold text-red-300">
          Login
        </h2>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 w-full rounded border px-3 py-2 shadow-sm focus:border-red-300 focus:outline-none focus:ring-"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 w-full rounded border px-3 py-2 shadow-sm focus:border-red-300 focus:outline-none focus:ring-red-300"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-red-300 px-4 py-2 text-white hover:bg-pink-600"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
