import style from "./GameBoard.module.scss"

export const GameBoard = ({children}) => {
    return (
        <>
            <div className={style.gameBoard}>
                {children}
            </div>
        </>
    )
}