export default function Navbar({}) {
  const menu: { name: string; link: string }[] = [
    { name: "Check Camera", link: "/" },
    { name: "Share to Others", link: "/" },
    { name: "Control Panel", link: "/" },
    { name: "Check Automation", link: "/" },
  ];

  return (
    <div className=" w-96 h-screen bg-sycamore-300 list-none">
      <div>
        {menu.map((menu) => (
          <li key={menu.name} className=" flex justify-center">
            <a
              href={menu.link}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
                no-underline text-green-700 border-white 
                hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              {menu.name}
            </a>
          </li>
        ))}
      </div>
      <div className="w-70 h-60 bg-leaf bg-no-repeat bg-center "></div>
    </div>
  );
}
