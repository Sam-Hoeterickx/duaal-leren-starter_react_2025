import clsx from "clsx"

//CSS
import styles from './navigationBar.module.scss'
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
                <div className={clsx(styles['icon'])} id="weather">
                    <NavLink to="/weather">
                        <img src="public/icons/weather.svg" alt="" />
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