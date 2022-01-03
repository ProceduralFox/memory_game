import React, { useEffect, useRef, useState } from 'react'
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

    function shuffle_raw (a) {
        const deck = [...a]
        var m = deck.length - 1

        console.log("shuffle raw ran", m)
        console.log("input is", a)

        while(m){
            const n = Math.floor(Math.random() * m);
            console.log("the inner loop runs too")
            const temp = deck[m]
            deck[m] = deck[n]
            deck[n] = temp

            m = m - 1
        }

        return deck
    }

    const shuffle = (reset) => {

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
        setPaired(0)
        setSeconds(0)
        setMinutes(0)

        if(reset){
            setStarted(false)
            setDelay(null)
        } else {
            setDelay(1000)
        }
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

    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
    }

    const [cards, setCards] = useState(generate(6))
    const [active, setActive] = useState()
    const [moves, setMoves] = useState(0)
    const [solved, setSolved] = useState([])
    const [started, setStarted] = useState(false)
    const [menu, setMenu] = useState(false)
    const [settings, setSettings] = useState([5, 5, 5, 5])
    const [paired, setPaired] = useState(0)
    const [screen, setScreen] = useState(2400)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [delay, setDelay] = useState(null)


    useEffect(()=>{
        function handle_resize(){
            setScreen(window.innerWidth)
            
        }

        window.addEventListener('resize', handle_resize)

        return () => {
            window.removeEventListener('resize', handle_resize)
        }
    }, [])

    useEffect(()=>{

    }, [])

    useInterval(()=>{
        if(seconds === 59){
            setMinutes(minutes + 1)
            setSeconds(0)
        } else {
            setSeconds(seconds + 1);
        }

    }, delay);


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
                        var board = generate(settings[2])
                        board = shuffle_raw(board)
                        setCards(board)
                        setStarted(true)
                        console.log(active)

                        setDelay(1000)
                        
                        }}className="btn_big">Start Game</button>
                </div>
            </div>
        </div> )
    }

    return (
    <div className="body">
        {
            paired == (settings[2] * settings[2])/2 ?

            <div className="popup">
                <div className="win_square">

                    <div className="win_text">
                        <h2 className="win_title">You did it!</h2>
                        <h4 className="win_blurb">Game Over! Here's how you got on...</h4>
                    </div>

                    <div className="win_results">
                        <div className="win_results_item"><h2>Time Elapsed</h2> <div className="win_results_item_value">{minutes}:{seconds}</div></div>
                        <div className="win_results_item"><h2>Moves Taken</h2> <div className="win_results_item_value" >{moves} Moves</div></div>
                    </div>

                    <div className="win_buttons">
                        <button onClick={()=>{shuffle(false)}} className="btn_primary_win">Restart</button>
                        <button onClick={()=>{shuffle(true)}} className="btn_secondary_win">Start New Game</button>
                    </div>

                
                </div>
            </div>
            :
            <div className=""></div>
        }

        {
            menu == true ? 
            <div className="popup">
                <div className="menu_square">
                    <button onClick={()=>{shuffle(false); setMenu(false)}}className="menu_primary">Restart</button>
                    <button onClick={()=>{shuffle(true); setMenu(false)}} className="menu_secondary">New Game</button>
                    <button onClick={()=>{setMenu(false); setDelay(1000)}}className="menu_secondary">Resume Game</button>
                </div>
            </div> 
            : 
            <div className=""></div>
        }

        <div className={`upper4`}>
            <div className="name4">memory</div>
            <div className="utilities4">
                {
                    screen <= 600 ? <button onClick={()=>{setMenu(true); setDelay(null)}} className="utilities_mobile"> Menu</button> : 
                        <>
                            <button onClick={()=>shuffle(false)} className="btn_primary">Restart</button>
                            <button onClick={()=>shuffle(true)}className="btn_secondary">New Game</button>
                        </>
                }
            </div>
        </div>

        <div className={`grid${settings[2]}`}>
            {cards.map((card, index)=>{

                if(card[1]==1){
                    return <div className={`solved card${settings[2]} noselect`}>
                        {card[0]}
                    </div>
                }

                return(
                    <div key={index} 
                        className={`${active===index ? 'clicked':'unclicked'} card${settings[2]} noselect`}
                        onClick={()=>{
                            if(active){
                                const match = cards[active][0] === card[0]
                                if(match && active!=index){
                                    var deck = [...cards]
                                    deck[index][1] = 1
                                    deck[active][1] = 1
                                    setPaired(paired+1)

                                    if(paired + 1 == (settings[2] * settings[2])/2){
                                        setDelay(null)
                                    }
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

        <div className={`lower${settings[2]}`}>
            <div className="lower4_box">
                <div className="lower4_box_text">Time</div>
                <div className="lower4_box_data">{minutes}:{seconds}</div>
            </div>
            <div className="lower4_box">
                <div className="lower4_box_text">Moves</div>
                <div className="lower4_box_data">{moves}</div>
            </div>
        </div>

    </div>);
}
 
export default Memory_game;