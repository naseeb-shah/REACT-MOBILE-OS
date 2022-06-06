import Listitem from "./listitem"
const Showlist=(props)=>{
const { list}= props
    return (
        <>
       { list.map((x)=>(
            <Listitem item={x} />
        )
        )
       }
       </>
    )
}
export default Showlist