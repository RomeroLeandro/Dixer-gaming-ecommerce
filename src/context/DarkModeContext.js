import { useContext, createContext, useState ,useEffect} from "react";

const DarkModeContext = createContext()

export const useDarkModeContext = ()=> useContext(DarkModeContext)

export const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if(darkMode)
    {var fondoDark= document.getElementById('root');
    fondoDark.style.backgroundColor = '#505050';  }
    else
    {var fondo= document.getElementById('root');
    fondo.style.backgroundColor = '#F0F4EF';  }
  }, [darkMode])


  
  const toggleDarkMode = ()=>{
    
    setDarkMode(!darkMode)
    if(!darkMode) {
      document.body.firstElementChild?.classList.add('darkMode')
  }else{
    document.body.firstElementChild?.classList.remove('darkMode')
  }}
  
  return(
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {props.children}
    </DarkModeContext.Provider>
  )
}