import clsx from 'clsx'
import styles from './thrashIcon.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

//Types
import { Helper } from './types/languageHelperType'

interface ThrasIconProps{
    TrashType: {
        en: string,
        nl: string
    }
}

export const ThrashIcon: FC<ThrasIconProps> = ( {TrashType} ) => {

    const { i18n } = useTranslation();
    const selectedLng = i18n.language as Helper<ThrasIconProps["TrashType"]>;

    return(
        <>
            <div className={
                clsx(styles['trash-icon'], styles[`trash-icon--${TrashType.nl}`])
            } >
                <img src={`/public/waste/${TrashType.nl}.svg`} alt="" />
                <h4>
                    { TrashType[selectedLng] }
                </h4>
            </div>
        </>
    )
}