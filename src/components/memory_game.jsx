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

    const game_click = () => {
        if(active){
            
        } else {

        }
    }

    const settings_click = (id, value) => {
        const temp = [...settings]
        temp[id] = value
        setSettings(temp)
    }

    const [cards, setCards] = useState(generate(6))
    const [test, setTest] = useState()
    const [active, setActive] = useState()
    const [moves, setMoves] = useState(0)
    const [solved, setSolved] = useState([])
    const [started, setStarted] = useState(false)
    const [settings, setSettings] = useState([5, 5, 5, 5])

    if(!started){
        return (
        <div className="start_page">
            <div className="start_content">
                <div className="start_title">
                    memory
                </div>
                <div className="start_menu">

                    <div className="start_menu_item">
                        <button onClick={()=>{settings_click(0, 0)}} className={`${settings[0]=== 0 ? "menu_selection_clicked" : "menu_selection"}`}>Numbers</button>

                        <button onClick={()=>{settings_click(0, 1)}} className={`${settings[0]=== 1 ? "menu_selection_clicked" : "menu_selection"}`}>Icons</button>
                    </div>

                    <div className="start_menu_item">
                        <button onClick={()=>{settings_click(1, 0)}} className={`${settings[1]=== 0 ? "menu_selection_clicked" : "menu_selection"}`}>1</button>

                        <button onClick={()=>{settings_click(1, 1)}} className={`${settings[1]=== 1 ? "menu_selection_clicked" : "menu_selection"}`}>2</button>
                        <button onClick={()=>{settings_click(1, 2)}} className={`${settings[1]=== 2 ? "menu_selection_clicked" : "menu_selection"}`}>3</button>
                        <button onClick={()=>{settings_click(1, 3)}} className={`${settings[1]=== 3 ? "menu_selection_clicked" : "menu_selection"}`}>4</button>

                    </div>

                    <div className="start_menu_item">
                        <button onClick={()=>{settings_click(2, 4)}} className={`${settings[2]=== 4 ? "menu_selection_clicked" : "menu_selection"}`}>4x4</button>

                        <button onClick={()=>{settings_click(2, 6)}} className={`${settings[2]=== 6 ? "menu_selection_clicked" : "menu_selection"}`}>6x6</button>
                    </div>

                    <button onClick={()=>{
                        setCards(generate(settings[2]))
                        setStarted(true)}}className="btn_big">Start Game</button>
                </div>
            </div>
        </div> )
    }

    return (
    <div className="body">
        <div className={`upper4`}>
            <div className="name4">memory</div>
            <div className="utilities4">
                <button onClick={()=>shuffle()} className="btn_primary">Restart</button>
                <button onClick={()=>{setStarted(false)}}className="btn_secondary">New Game</button>
            </div>
        </div>
        <div className={`grid${settings[2]}`}>
            {cards.map((card, index)=>{

                if(card[1]==1){
                    return <div className={`solved card${settings[2]}`}>
                        {card[0]}
                    </div>
                }



                return(
                    <div key={index} 
                        className={`${active===index ? 'clicked':'unclicked'} card${settings[2]}`}
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