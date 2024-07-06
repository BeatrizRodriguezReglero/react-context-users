import { StyledContainerCard, StyledImage, StyledName } from "./cardUser.styles"

const CardUser=({image, name,age,setUserActive})=>{
    return(<>
        <StyledContainerCard>
            <StyledImage src={image} alt="" />
            <StyledName>{name}</StyledName>
            <span>{age}</span>
            <button onClick={()=>setUserActive(name)}>Activate User </button>

        </StyledContainerCard>
    
    </>)
}
export default CardUser