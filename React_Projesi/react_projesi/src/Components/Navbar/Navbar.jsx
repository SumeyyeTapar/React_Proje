
import React from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.jpg';
import toogle_light from '../../assets/night.png';
import toogle_dark from '../../assets/day.png';
import male_user from '../../assets/maleuser.png';

const Navbar = ({ theme, setTheme }) => {
    const toogle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    // Profil kısmına tıklandığında yönlendirme yapacak fonksiyon
    const handleProfileClick = () => {
      window.location.assign('/indexl.html'); // Yönlendirme yapılacak sayfanın yolunu belirtin
  };
    return (
        <>
            <div className='navbar'>
                <img src={theme === 'dark' ? logo_dark : logo_light} alt="#" className='logo' />
                <ul>
                    <li>Bana Özel</li>
                    <li>Film</li>
                    
                    <li>Dizi</li>
                    <li>Kirala & Satın Al</li>
                    <li>Çocuk</li>
                    <li>Canlı TV</li>
                </ul>

                <div className='profil' onClick={handleProfileClick}>
                    <p>Ana Profil</p>
                    {/* <p><a href="index.html">Ana Profil</a></p> */}
                    <img src={male_user} alt="#" className='maleUser' />
                </div>
                <img
                    onClick={() => { toogle_mode() }}
                    src={theme === 'light' ? toogle_light : toogle_dark}
                    alt="#"
                    className='toggle-icon'
                />
            </div>
        </>
    );
}

export default Navbar;



