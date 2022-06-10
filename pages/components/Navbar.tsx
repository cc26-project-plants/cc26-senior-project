import { useVisibility } from "../../context/VisibilityContext";

const Navbar = () => {
  const { setChart, setControl } = useVisibility();
  const menu: { name: string; link: any }[] = [
    { name: "Plant Status", link: "status" },
    { name: "Share to Others", link: "/" },
    { name: "Control Panel", link: "control" },
    { name: "Check Automation", link: "/" },
  ];

  return (
    <div className="hidden md:flex">
    <div className="w-80  bg-apple-300 list-none">
      <div className="mt-24">
        {menu.map((menu) => (
          <li
            key={menu.name}
            className="flex justify-center mt-1 cursor-pointer select-none"
          >
            <a
              onClick={() => {
                if (menu.link === "control") {
                  setChart(false);
                  setControl(true);
                } else if (menu.link === "status") {
                  setChart(true);
                  setControl(false);
                }
              }}
              className="w-40 h-14 inline-block text-lg font-mono px-4 py-2 leading-none border rounded
                no-underline text-teal-800 border-white
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
    </div>
  );
};

export default Navbar;
