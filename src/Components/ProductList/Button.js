function Button(props) {

    return <button disabled={props.disabled} onClick={props.eventHandler} className='btn btn-primary'>{props.children}</button>
}
export default Button;