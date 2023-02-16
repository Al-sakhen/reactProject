import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
const ToggleDarkMode = ({ isDark = true, setIsDark }) => {
  return (
    <div className="fixed flex items-center z-20 top-8 left-6">
      <a href="https://github.com/Al-sakhen/reactProject.git" target="_blank" >
        <FaGithubSquare size="2em" className="bg-slate-300 border-0 rounded-xl mr-2" />
      </a>
      <button
        className=" bg-slate-500 p-2 rounded-xl border border-blue-400"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? (
          <BsFillSunFill className="text-yellow-300 text-lg" />
        ) : (
          <BsFillMoonFill className="text-gray-300 text-lg" />
        )}
      </button>
    </div>
  );
};

export default ToggleDarkMode;
