import React, {useState, useRef} from 'react'

function DynamicSizePara({text, fontSize}) {
    const [size, setSize] = useState({width:0,height:0})
    const paraRef = useRef(null)
    /*useEffect(()=>{
        if(para)
    })*/
    return (
        <>
            <p>{text}</p>
        </>
    )
}

export default DynamicSizePara
