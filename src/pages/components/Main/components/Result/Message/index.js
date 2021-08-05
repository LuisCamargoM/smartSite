import './Message.css';


const Message = ({message}) => {  
  return (
    // <Row  lg={12} className="result-row">
    <div className="Message">
        <h1>{message}</h1>
    </div>

  );
}

export default Message;
