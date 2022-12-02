import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="mx-5 my-5 p-2 bg-amber-400 rounded-lg hover:bg-amber-500 ">
          <SunIcon
            className="text-white w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            role="button"
            onClick={() => setTheme("light")}
          />
        </div>
      );
    } else {
      return (
        <div className="mx-5 my-5 p-2 bg-violet-700 rounded-lg ">
          <MoonIcon
            className=" text-white w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 "
            role="button"
            onClick={() => setTheme("dark")}
          />
        </div>
      );
    }
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center  md:ml-80">
          <div className="">{renderThemeChanger()}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
