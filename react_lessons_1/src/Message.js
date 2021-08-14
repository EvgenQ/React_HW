const Message = (props) => {
    console.log(props)
    return <div class="messagetext">Это мой первый компонент: {props.textToShow}</div>
}
export default Message;