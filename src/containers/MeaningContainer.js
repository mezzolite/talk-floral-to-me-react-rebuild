import React from 'react'
import MajorMeaningUL from '../components/MajorMeaningUL'

const MeaningContainer = ({meanings}) => {

    const createMeaningULs = () => {
        return Object.entries(meanings).map(meaningArray => {
          return <MajorMeaningUL meaningName={meaningArray[0]} meanings={meanings} />
        })
    }

    return(
        <div className="meaning-container">
            {createMeaningULs()}
        </div>
    )
}

export default MeaningContainer