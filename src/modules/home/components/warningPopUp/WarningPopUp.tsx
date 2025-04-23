import clsx from "clsx";
import { FC } from "react"
import styles from './warningPopUp.module.scss'

interface PopUpType {
    rain: boolean | undefined;
}

export const WarningPopUp: FC<PopUpType> = ({ rain }) => {
    return (
        <>
            {rain ? <div className={clsx(styles['warning-pop-up'])}> <img src="public/icons/danger.svg"  /> <p>Deze avond gaat het regenen <br/> zet uw vuilnis morgen pas buiten</p></div> : null}
        </>
    );
};