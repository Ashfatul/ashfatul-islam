import { BiMoon, BiSun } from "react-icons/bi";
export default function ThemeToggle({ dark, toggleTheme }) {
   return (
      <div className="flex items-center gap-2">
         <span className="ml-3 font-medium text-2xl">
            <BiSun className={`${!dark && "text-orange-500"}`} />
         </span>
         <label className="relative inline-flex items-center cursor-pointer">
            <input
               type="checkbox"
               value=""
               className="sr-only peer"
               onClick={() => toggleTheme()}
               checked={dark}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
         </label>
         <span className="ml-3 text-2xl font-medium dark:text-gray-300">
            <BiMoon className={`${dark && "text-orange-500"}`} />
         </span>
      </div>
   );
}
