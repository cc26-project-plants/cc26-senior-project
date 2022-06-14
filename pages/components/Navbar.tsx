import { useVisibility } from "../../context/VisibilityContext";

const Navbar = () => {
  const { setChart, setControl } = useVisibility();
  const menu: { name: string; link: any }[] = [
    { name: "Plant Status", link: "status" },

    { name: "Control Panel", link: "control" },
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
                className=" navBarBtn"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </div>
        <div className="w-70 h-60 bg-contain bg-happa  bg-no-repeat bg-center mt-16"></div>
      </div>
    </div>
  );
};

export default Navbar;
