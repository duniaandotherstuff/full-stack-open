const Button = ({ text, clickHandler }) => {
    const style = { marginRight: 5 }
    return <button onClick={clickHandler} style={style}>{text}</button>
}

export default Button