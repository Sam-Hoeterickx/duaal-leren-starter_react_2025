import clsx from "clsx"

//CSS
import styles from './navigationBar.module.css'
import { Link, NavLink } from "react-router"

export const NavigationBar = () => {
    return(
        <>
            <nav className={
                clsx(styles['navigationBar'])
            }>
                <div className={clsx(styles['icon'])} id="home">
                    <NavLink to="/">
                        <img src="public/icons/home.svg" alt="" />     
                    </NavLink>           
                </div>
                <div className={clsx(styles['icon'])} id="calendar">
                    <NavLink to="/calendar">
                        <img src="public/icons/calendar.svg" alt="" />
                    </NavLink>
                </div>
                <div className={clsx(styles['icon'])} id="location">
                    <NavLink to="/map">
                        <img src="public/icons/location.svg" alt="" />
                    </NavLink>
                </div>
                <div className={clsx(styles['icon'])} id="recycle">
                    <NavLink to="/recyclingcenter">
                        <img src="public/icons/recycle.svg" alt="" />
                    </NavLink>
                </div>
                <div className={clsx(styles['icon'])} id="more">
                    <NavLink to="/options">
                        <img src="public/icons/more.svg" alt="" />
                    </NavLink>
                </div>
            </nav>
        </>
    )
}