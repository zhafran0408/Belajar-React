/** @format */

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-white">
        💻 Laptop Store
      </h1>

      <ul className="flex gap-8 text-white font-medium">
        <li className="cursor-pointer hover:text-gray-200 transition">
          Home
        </li>
        <li className="cursor-pointer hover:text-gray-200 transition">
          Product
        </li>
        <li className="cursor-pointer hover:text-gray-200 transition">
          About
        </li>
        <li className="cursor-pointer hover:text-gray-200 transition">
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;