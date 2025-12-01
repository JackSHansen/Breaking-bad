import style from "./GameBoard.module.scss"

export const GameBoard = ({children}) => {
    return (
        <>
            <main className={style.gameBoard} role="main" aria-labelledby="site-title">
                {children}
            </main>
        </>
    )
}