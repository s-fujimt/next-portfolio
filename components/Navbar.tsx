import React from "react";
import Scrollspy from "react-scrollspy";
import Logo from "./Logo";

const sections = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Projects", id: "projects" },
  { title: "Skills", id: "skills" },
  // { title: "Contact", id: "contact" },
];

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const newIsTop = window.scrollY < 100;
      setIsTop(newIsTop);
    });
  }, []);

  return (
    <>
      <nav
        className={
          "top-0 fixed z-50 w-full flex items-center justify-between px-2 transition-all duration-300" +
          (isTop
            ? " py-2 md:py-4 bg-transparent"
            : " bg-white bg-opacity-60 shadow") +
          (navbarOpen ? " bg-white shadow" : "")
        }
      >
        <div className="container max-w-6xl px-4 mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <Logo />

            <div>
              <button
                className="cursor-pointer text-xl p-1 lg:hidden"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={
              "flex flex-col lg:flex-row items-center w-full lg:w-auto transition-all duration-300" +
              (navbarOpen
                ? " my-3 lg:my-0 h-auto visible opacity-100"
                : " invisible lg:visible h-0 lg:h-auto opacity-0 lg:opacity-100")
            }
          >
            <Scrollspy
              items={sections.map((s) => s.id)}
              currentClassName="text-red-600"
              className={
                "flex flex-col lg:flex-row list-none text-neutral-900 w-full"
              }
            >
              {sections.map((s) => (
                <li
                  key={s.id}
                  className="flex items-center justify-center hover:text-neutral-500  transition-colors duration-300 w-full"
                >
                  <a
                    href={`#${s.id}`}
                    onClick={() => setNavbarOpen(false)}
                    className={`flex items-center justify-center text-sm uppercase font-black w-full px-3 py-5 border-t lg:border-none `}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>
        </div>
      </nav>
    </>
  );
}
