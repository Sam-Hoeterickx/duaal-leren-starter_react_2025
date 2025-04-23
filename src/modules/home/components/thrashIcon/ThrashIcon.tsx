import clsx from 'clsx'
import styles from './thrashIcon.module.scss'
import { FC } from 'react'

interface ThrasIconProps{
    trashType: string
}

export const ThrashIcon: FC<ThrasIconProps> = ( {trashType} ) => {

    return(
        <>
            <div className={
                clsx(styles['trash-icon'], styles[`trash-icon--${trashType}`])
            } >
                <img src={`/public/waste/${trashType}.png`} alt="" />
                <h4>
                    { trashType }
                </h4>
            </div>
        </>
    )
}