import logo from '../assets/images/Logo.jpg'
import '../assets/styles/footer.css'
function Footer(){
    return (
        <footer className='main_footer' role="contentinfo" aria-label="Website Footer">
            <section className="address_sections">
            <div>
                <h3>Park Tech & Consultancy</h3>
            <figure className='logo_footer_Fig' aria-label='Logo Section of Park Technology & Consultancy'>
                <img src={logo} aria-label='Logo of Park Technology & Consultancy' alt="Park Tech & Consultancy logo consist of Company Name Aligned Around the unstricked Circle inside the name of the company there is graduation hat and icon of one person and Company Name Abberivation"/>
            </figure>

            </div>
            <div>
            <address aria-label='Address of Park Technology & Consultancy'>
                    Near Park Hotel<br />
                    1001 Near Sarzer zamini<br />
                    Kabul, Dist 2<br />
                    Afghanistan<br />
            </address>
            <div>

            <a aria-label='cellphone Number of Park Technology & Consultancy' href="tel:+123456789">+93 (0)78 459 1495 </a>
            </div>
            <div>

            <a aria-label='Email Address of Park Technology & Consultancy' href="mailto:parknet9@gmail.com">Email Us</a>
            </div>

            </div>
            </section>

            <section aria-label="Social Media Links">
                <h3>Social Media</h3>
                <nav aria-label="List of Social Medias">
                    <ul>
                    <li aria-label="Facebook Page List">   <a aria-label='Facebook Page Link' href="https://www.facebook.com/ParkTechnologyConsultancy" target="_blank" rel="noreferrer"> Facebook</a></li>
                    <li aria-label="Youtube Channel List"> <a aria-label='Youtube Page Link' href="https://www.youtube.com/@PARKTechConsultancy" target="_blank" rel="noreferrer"> Youtube</a></li>
                    <li aria-label="Instagram Page List">  <a aria-label='Instagram Page Link' href="https://www.instagram.com/ParkTechConsultancy" target="_blank" rel="noreferrer"> Instagram</a></li>

                    </ul>
                </nav>
            </section>

            <section aria-label="Footer Navigation Shortcut of Main Navigation" >
                <h3>Links</h3>
                <ul aria-label="Navigation Lists">
                <li aria-label="Home Page List"> <a aria-label="Home Page Link" href="/">Home</a></li>
                <li aria-label="Services Page List"><a aria-label="Services Page Link" href="/Services">Services</a></li>
                <li aria-label="Contact Us Page List"><a aria-label="Contact Us Page Link" href="/Contact_Us">Contact Us</a></li>
                <li aria-label="About Us Page List"><a  aria-label="About Us Page Link" href="/About_Us">About Us</a></li>
                </ul>
            </section>

            <section aria-label="Privacy & Policy Section">
                <h3>Privacy & Policies</h3>
                    <nav aria-label="Privacy & Policy Navigation">
                        <ul aria-label="Privacy & Policy Unorder Lists">
                            <li aria-label="Privacy & Policy List"><a aria-label="Privacy & Policy Link" href="/hello">Privacy Policy</a></li>
                            <li aria-label="Terms & Agreement List"><a aria-label="Terms & Agreement Link" href="/hello">Terms & Agreements</a></li>
                        </ul>
                    </nav>
            </section>
     
        </footer>
    )
}

export default Footer