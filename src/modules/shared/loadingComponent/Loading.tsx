import { FC, ReactNode } from "react"
import styles from './loading.module.scss'
import clsx from "clsx"

interface LoadingType {
    loadingState: boolean,
    children: ReactNode
}

export const Loading: FC<LoadingType> = ( {loadingState, children}) => {
    return(
        loadingState ? <div className={clsx(styles['loading'])}></div> : children
    )
}