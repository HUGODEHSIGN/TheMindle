import React, {useContext} from 'react'
import LetterBox from './LetterBox'
import { useInputChar } from '../../features/useInputChar'
import { GuessContext } from '../context/DataContext'



const GuessRow = () => {
    const currentGuess = useContext(GuessContext);

    let renderedBoxes: any = [];
    const renderBoxes = () => {
        
        for (let i=0; i < 5; i++) {
                renderedBoxes.push(<LetterBox key={i}>{currentGuess[i]}</LetterBox>)
        }
    }
    renderBoxes();
    
  return (
    <>
    <div className='grid grid-cols-5 gap-1'>
        {renderedBoxes}
    </div>
    </>
  )
}

export default GuessRow