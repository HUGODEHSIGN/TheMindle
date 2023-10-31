


import  DataProvider  from '../context/DataContext';
import GuessRow from './GuessRow';
import PrevGuessRow from './prevGuessRow';

import Test from './test';

interface props {
    children: React.ReactNode | string
}

const GameGrid = ({ children }: props) => {


    
  return (
    <DataProvider>
    <div className='grid justify-center gap-1'>
        <PrevGuessRow></PrevGuessRow>
        <GuessRow></GuessRow>
    </div>
    </DataProvider>
  )
}

export default GameGrid