const NavLink = ({ href, text, mobile }) => {
  return (
    <a
      href={href}
      className={`${
        mobile 
          ? 'block py-2 text-gray-800 hover:text-yellow-600 transition'
          : 'text-gray-800 hover:text-yellow-600 transition'
      }`}
    >
      {text}
    </a>
  );
};

export default NavLink;