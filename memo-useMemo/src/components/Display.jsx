import { memo } from "react"

const Display = memo(({ value }) => {    
    console.log("Render de Display otra vez")
    return (
        <div>{value}</div>
    )
})

export default Display