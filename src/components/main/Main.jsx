import { useContext } from "react"
import { USERS } from "../../constants/users"
import CardUser from "../cardUser/CardUser"
import { UserContext } from "../../contexts/UserContext"
import { StyledMain } from "./main.styles"

const Main =()=>{
    const {setUserActive}= useContext(UserContext)
 return(<>
    <StyledMain>
        {USERS.map((user,index)=>(
            <CardUser key={index}
            name={user.name}
            age={user.age}
            image={user.image} setUserActive={setUserActive}>
                
            </CardUser>
        ))}
    </StyledMain>
 
 </>)
}
export default Main