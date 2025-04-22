import clsx from "clsx"

import styles from './navigationBar.module.css'

export const NavigationBar = () => {
    return(
        <>
            <nav className={
                clsx(styles['navigationBar'])
            }>
                <div className="icon" id="home">
                <img src="public/icons/home.svg" alt="" />                    
                </div>
                <div className="icon" id="calendar">
                    <img src="public/icons/calendar.svg" alt="" />
                </div>
                <div className="icon" id="location">
                    <img src="public/icons/location.svg" alt="" />
                </div>
                <div className="icon" id="recycle">
                    <img src="public/icons/recycle.svg" alt="" />
                </div>
                <div className="icon" id="more">
                    <img src="public/icons/more.svg" alt="" />
                </div>
            </nav>
        </>
    )
}