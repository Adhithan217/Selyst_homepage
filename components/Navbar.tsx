"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full shadow-md bg-white py-4 px-6 md:px-12 fixed top-0 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Left: Brand */}
        <div className="text-2xl font-bold text-blue-600 tracking-tight">
          Selyst
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/professionals"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            For Professionals
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
