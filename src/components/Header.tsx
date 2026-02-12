import { Link } from 'react-router-dom';
import { cyberpunkLogo, twitchLogo, twitterLogo, vkLogo, facebookLogo, instagramLogo, youtubeLogo } from '../assets'

export const Header = () => {
    return (
        <header className='header center'>
            <Link to={'/'}><img className='header__siteLogo' src={cyberpunkLogo} alt=''></img></Link>
            <div className='header__social'>
                <Link to={'https://www.youtube.com/CyberPunkGame/videos'} target='_blank'><img className='header__social_item' src={youtubeLogo} alt='Cyberpunk on YouTube'></img></Link>
                <Link to={'https://vk.com/cyberpunkgame'} target='_blank'><img className='header__social_item' src={vkLogo} alt='Cyberpunk on VK'></img></Link>
                <Link to={'https://www.facebook.com/groups/cyberpunk2077official/'} target='_blank'><img className='header__social_item' src={facebookLogo} alt='Cyberpunk on Facebook'></img></Link>
                <Link to={'https://x.com/CyberpunkGame'} target='_blank'><img className='header__social_item' src={twitterLogo} alt='Cyberpunk on Twitter'></img></Link>
                <Link to={'https://www.twitch.tv/directory/category/cyberpunk-2077/videos/all'} target='_blank'><img className='header__social_item' src={twitchLogo} alt='Cyberpunk on Twitch'></img></Link>
                <Link to={'https://www.instagram.com/cyberpunkgame/'} target='_blank'><img className='header__social_item' src={instagramLogo} alt='Cyberpunk on Instagram'></img></Link>
            </div>
        </header>
    )
}
