export const ThrashIcon = ( {trashType}:{ trashType:string } ) => {

    return(
        <>
            <img src={`/public/icons/${trashType}`} alt="" />
            <h4>
                { trashType }
            </h4>
        </>
    )
}