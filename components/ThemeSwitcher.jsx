import { BsSun, BsMoonStars } from "react-icons/bs";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="mr-5 inline-block text-sky-300 dark:text-sky-500 hover:bg-slate-300/30 rounded-md p-2 transition">
			{
				theme === 'light' ?
					<BsSun  fontSize="20px" />
					: <BsMoonStars  fontSize="20px" />
			}
		</button>
	)
}

export default ThemeSwitcher	