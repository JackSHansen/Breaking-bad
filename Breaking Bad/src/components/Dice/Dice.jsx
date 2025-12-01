import style from "./Dice.module.scss"

export const Dice = ({diceSide, type, rolling}) => {
    return (
        <>
            <span
                className={`${style.diceStyling} ${style[type]} ${rolling ? style.diceRolling : null}`}
                role="img"
                aria-live="polite"
                aria-atomic="true"
                aria-label={`Terningeværdi: ${diceSide}`}
                title={`Terningeværdi: ${diceSide}`}
            >
                <p>{diceSide}</p>
            </span>
        </>
    )
}