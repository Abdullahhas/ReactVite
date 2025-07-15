import { createContext , useContext , useState , useEffect } from "react";

const ThemeContext = createContext()


export const useTheme = ()=> useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState(()=> localStorage.getItem("app-theme")) // it runs only once when the component first mounts, and gives theme an initial value based on localStorage.

    useEffect(() => {
        localStorage.setItem('app-theme' , theme)
    }, [theme])
    


    const toggleTheme = ()=> {
        setTheme((prev) => (prev == 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}