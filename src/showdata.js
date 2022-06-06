import Showlist from "./list"
import Title from "./title"

export default function Card(props){
    const {heading,list}=props
    return(
        <>
       
<Title  heading={heading}/>
        <Showlist  list={list}/>
        </>
    )
}