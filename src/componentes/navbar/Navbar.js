import React from 'react'
import style from './Navbar.module.css'


function Navbar () {
    return(
        <div className={style.container}>

        <div className={style.firstContainer}>
            <div className={style.login}>
                <div>SIGN IN</div>
                 <>|</>
                <div>JOIN</div>
            </div>

            <h1 className={style.titulo}>MARVEL</h1>

            <div className={style.search}>
                <div className={style.marvelUnlimited}>MARVEL UNLIMETED <div>Subscribe</div></div>
                <div>Lupa</div>
            </div>
        </div>

        <div className={style.secondContainer}>
            <ul>
                <li>VIDEOS</li>
                <li>CHARACTERS</li>
                <li>COMICS</li>
                <li>MOVIES</li>
                <li>TV SHOWS</li>
                <li>GAMES</li>
                <li>NEWS</li>
                <li>MORE</li>
            </ul>
        </div>

        <div className={style.thirdContainer}>
            <h1>COMICS PORTAL</h1>

            <ul>
                <li>How-Tos</li>
                <li>Interactive Documentation</li>
                <li>Get a Comic</li>
                <li>Help</li>
                <li>News and Update</li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar;