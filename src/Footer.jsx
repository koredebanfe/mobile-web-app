import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import youtube from './assets/youtube.svg';

export default function Footer() {
    return (
        <div className='sm:w-1/4 m-auto'>
        <div className='flex justify-between mb-6'>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
        </div>

        <div>
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Press Room</a>
        </div>

        <p>& copyright MovieBox by Adriana Eka Prayudha</p>
        </div>
    )
}