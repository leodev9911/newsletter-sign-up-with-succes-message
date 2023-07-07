import './TextComponent.css'

import iconSuccess from '../assets/images/icon-success.svg'

export const TextComponent = () => {
    return (
        <div className='title-div'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ prdouct managers receiving monthly updates on:</p>

            <ul className='title-list'>
                <li><img src={iconSuccess} alt="A success icon" />Product discovery and building what matters</li>
                <li><img src={iconSuccess} alt="A success icon" />Measuring to ensure updates are a success</li>
                <li><img src={iconSuccess} alt="A success icon" />And much more!</li>
            </ul>
        </div>
    )
}