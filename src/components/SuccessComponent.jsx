import './SuccessComponent.css' 
import iconSuccess from '../assets/images/icon-success.svg'

export const SuccessComponent = ({
    handleDismiss,
    email
}) => {
    return (
        <div className='modal-section hide'>
            <div className='modal'>
                <div className='thanks-message'>
                    <img src={iconSuccess} alt=""/>
                    <h2>Thanks for subscribing!</h2>
                    <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscrition!</p>
                </div>
                <button onClick={handleDismiss}>    
                Dismiss message
            </button>
            </div>
        </div>
    )
}