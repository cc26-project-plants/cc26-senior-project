const Navbar = () => {
  const menu: { name: string; link: string }[] = [
    { name: "Check Camera", link: "/" },
    { name: "Share to Others", link: "/" },
    { name: "Control Panel", link: "/" },
    { name: "Check Automation", link: "/" },
  ];

  return (
    <div className=" w-80  bg-apple-300 list-none ">
      <div className="mt-24">
        {menu.map((menu) => (
          <li key={menu.name} className="flex justify-center mt-1">
            <a
              href={menu.link}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
                no-underline text-gray-50 border-white
                hover:border-transparent hover:text-teal-600 hover:bg-apple-50 mt-4 lg:mt-0
                shadow-apple-400 shadow-md
                "
            >
              {menu.name}
            </a>
          </li>
        ))}
      </div>
      <div className="w-70 h-60 bg-leaf bg-no-repeat bg-center mt-16"></div>
    </div>
  );
};

export default Navbar;
