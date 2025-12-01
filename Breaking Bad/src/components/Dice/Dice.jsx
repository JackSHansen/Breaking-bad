import style from "./Dice.module.scss"

export const Dice = ({diceSide, type, rolling}) => {
    return (
        <>
            <span className={`${style.diceStyling} ${style[type]} ${rolling ? style.diceRolling : null}`}>
                <p>{diceSide}</p>
            </span>
        </>
    )
}