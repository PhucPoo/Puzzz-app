export default function Face() {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center justify-center relative p-6">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="10" cy="10" r="20" fill="none" stroke="#F9A8D4" strokeWidth="2" />
          <rect x="50" y="50" width="30" height="30" fill="none" stroke="#F9A8D4" strokeWidth="2" />
          <path d="M20 80 Q 50 60 80 80" fill="none" stroke="#F9A8D4" strokeWidth="2" />
        </svg>
      </div>

      {/* Main content */}
      <h1 className="text-4xl font-bold text-purple-700 z-10 text-center">Puzzz comes to every home </h1>
      <p className="text-gray-600 mt-2 z-10 text-center">Our name is changing but our commitment to teachers remains the same.</p>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-10 hover:bg-purple-700">Learn Why</button>

      {/* Search bar */}
      <div className="mt-6 w-full max-w-lg z-10">
        <div className="relative flex items-center w-full max-w-xl border rounded-md px-3 py-1.5 bg-white border-gray-300 ">
          <input
            type="text"
            placeholder="Search for any topic"
            className="ml-2 w-full outline-none placeholder-gray-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex space-x-4 z-10">
        <button className="bg-purple-500 text-white px-3 py-1 rounded-full">For you</button>
        <button className="bg-teal-500 text-white px-3 py-1 rounded-full">Assessments</button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded-full">Lessons</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded-full">Interactive videos</button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">Passages</button>
      </div>
    </div>
  );
}