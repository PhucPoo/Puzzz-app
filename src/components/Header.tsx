export default function Header() {
  return (
    <header className="ml-16 flex items-center justify-between bg-white p-2 border border-gray-300 rounded-b-lg shadow-sm ">
      {/* Search box */}
      <div className="flex items-center w-full max-w-xl border rounded-md px-3 py-1.5 bg-white border-gray-300">
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
        <input
          type="text"
          placeholder="Search in Wayground library"
          className="ml-2 w-full outline-none placeholder-gray-500"
        />
      </div>

      {/* Right buttons */}
      <div className="flex items-center space-x-3 ml-4">
        <button className="flex items-center border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M21 16.5V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8.5A2.5 2.5 0 005.5 19h13a2.5 2.5 0 002.5-2.5z"
            />
          </svg>
          Get help
        </button>
        <div className="w-8 h-8 bg-purple-500 text-white flex items-center justify-center rounded-full font-bold">
          P
        </div>
      </div>
    </header>
  );
}
