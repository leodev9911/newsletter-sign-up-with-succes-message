import './ImgComponent.css'
import illustration from '../assets/images/illustration-sign-up-mobile.svg'
import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg'

export const ImgComponent = () => {
    return (
        <div>
            <img className='sign-up-image-mobile' src={illustration} alt="A Layout"/>
            <img className='sign-up-image-mobile-desktop' src={illustrationDesktop} alt="A Layout"/>
        </div>
    )
}