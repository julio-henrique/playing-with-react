import React from "react"
import boxes from "./boxes"

export default function App() {
    const [boxesState, setboxesState] = React.useState(boxes)
    const showBoxes = boxesState.map(item => {
        return (
            <div key={item.id} className="box">
                {item}
            </div>
        )
    })
    return (
        <main>
            {showBoxes}
        </main>
    )
}
