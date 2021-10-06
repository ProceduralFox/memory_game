import React, { useEffect, useState } from 'react'
import '../styles/memory_game.styles.css'


const Memory_game = () => {

    const generate = (size) =>{
        const pairs = (size * size) / 2
        const array = []

        for (let index = 0; index < pairs; index++) {
            array.push([index, 0])
            array.push([index, 0])
        }

        return array
    }

    const shuffle = () => {
        var deck = [...cards]
        var m = deck.length - 1

        for (let index = 0; index < deck.length; index++) {
            deck[index][1] = 0
        }

        while(m){
            const n = Math.floor(Math.random() * m);

            const temp = deck[m]
            deck[m] = deck[n]
            deck[n] = temp

            m = m - 1
        }

        setCards(deck)
        setActive()
        setMoves(0)
    }

    const click = () => {
        if(active){
            
        } else {

        }
    }

    const [cards, setCards] = useState(generate(4))
    const [test, setTest] = useState()
    const [active, setActive] = useState()
    const [moves, setMoves] = useState(0)
    const [solved, setSolved] = useState([])


    return (
    <div className="body">
        <div className="upper4">
            <div className="name4">memory</div>
            <div className="utilities4">
                <button onClick={()=>shuffle()} className="btn_primary">Restart</button>
                <button className="btn_secondary">New Game</button>
            </div>
        </div>
        <div className="grid4">
            {cards.map((card, index)=>{

                if(card[1]==1){
                    return <div className="solved card4">
                        {card[0]}
                    </div>
                }



                return(
                    <div key={index} 
                        className={`${active===index ? 'clicked':'unclicked'} card4`}
                        onClick={()=>{
                            if(active){
                                const match = cards[active][0] === card[0]
                                if(match){
                                    var deck = [...cards]
                                    deck[index][1] = 1
                                    deck[active][1] = 1
                                } 
                            }
                            setActive(index)
                            setMoves(moves+1)
                        }}>
                        {card[0]}
                    </div>
                )
            })}
        </div>

        <div className="lower4">
            <div className="lower4_box">
                <div className="lower4_box_text">Time</div>
                <div className="lower4_box_data">1:45</div>
            </div>
            <div className="lower4_box">
                <div className="lower4_box_text">Moves</div>
                <div className="lower4_box_data">{moves}</div>
            </div>
        </div>

    </div>);
}
 
export default Memory_game;