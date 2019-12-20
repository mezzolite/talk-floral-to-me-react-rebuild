import React from 'react'
import MeaningCard from './MeaningCard'

const MajorMeaningUL = ({ meanings, meaningName }) => {
    
   const handleClick = (event) => {
       console.log(event.target.id)
        if(event.target.id === "beauty"){
            meanings.beauty.map(meaning => {
                return <MeaningCard meaning={meaning}/>
            })
        } else if (event.target.id === "happiness"){
            meanings.happiness.map(meaning => {
                return <MeaningCard meaning={meaning}/>
            })
        } else if (event.target.id === "love"){
            meanings.love.map(meaning => {
                return <MeaningCard meaning={meaning}/>
            })
        } else if (event.target.id === "wealth"){
            meanings.wealth.map(meaning => {
                return <MeaningCard meaning={meaning}/>
            })
        } else {
            meanings.character.map(meaning => {
                return <MeaningCard meaning={meaning}/>
            })
        }
    }
    
    return (
        <ul onClick={handleClick} id={meaningName}>
            {meaningName}
        </ul>
    )
}

export default MajorMeaningUL