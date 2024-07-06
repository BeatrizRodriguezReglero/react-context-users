import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledHeader } from "./header.styles";

const Header=()=>{
    const  {userActive, setUserActive} = useContext(UserContext)

    let activeUser = userActive;

    if (activeUser === '') {
      activeUser = 'No hay usuarios activos';
    }else{
        activeUser = `Usuario Activo: ${userActive}`
    }

    return(<>
        
        <StyledHeader>
            <h1>Users Control</h1>
            <span>{activeUser}</span>
            { userActive && <button onClick={()=>setUserActive('')}>Log Out</button>}
        </StyledHeader>
        
    
    </>)
}
export default Header