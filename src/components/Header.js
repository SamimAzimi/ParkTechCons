import logo from '../assets/images/Logo.jpg'
import '../assets/styles/header.css'
function Header(){
    return (
    <header className='MainHeaderOfWebsite' aria-label="Website Main Header">
        <aside>
              <figure className='MainHader_Logo_Fig' aria-label='Logo Section of Park Technology & Consultancy'>
                <img src={logo} aria-label='Logo of Park Technology & Consultancy' alt="Park Tech & Consultancy logo consist of Company Name Aligned Around the unstricked Circle inside the name of the company there is graduation hat and icon of one person and Company Name Abberivation"/>
			    <figcaption>Park Tech & Consultancy</figcaption>
            </figure>
        </aside>

        <nav className='Main_Header_Navigation' aria-label='Main Navigation'>
        <ul className='Main_Header_Navigation_UL' aria-label="Main Navigation unorder Lists">
            <li aria-label="Main Navigation unorder List"><a aria-label="Home Page Navigation Link" href="/">Home</a></li>
            <li aria-label="Main Navigation unorder List"><a aria-label="Services Page Navigation Link" href="/Services">Services</a></li>
            <li aria-label="Main Navigation unorder List"><a aria-label="Contact Us Navigation Link" href="/Contact_Us">Contact Us</a></li>
            <li aria-label="Main Navigation unorder List"><a aria-label="About Us Link" href="/About_Us">About Us</a></li>
        </ul>
        </nav>
    </header>
    )
}

export default Header