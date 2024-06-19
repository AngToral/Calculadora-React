function Button(props) {
    return (
        <button 
        className={props.className} 
        onClick={props.onClick}
        data-type={props.type}
        >{props.label}</button>
    )
}

export default Button