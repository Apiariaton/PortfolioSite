
import "./ErrorPage.css";

function ErrorPage(props)
{
return (
<div className="error_container"><div className="error_box"><p1 className="message">{props.error}</p1></div></div> 
);


}

export default ErrorPage;