import "./AboutUs.css";
import AbrahamZambranoTablante from "../assets/AbrahamZambranoTablante.png";
import MichaelDantzler from "../assets/MichaelDantzler.png";
import NikiKhanam from "../assets/NikiKhanam.jpg";
import StevenRouse from "../assets/StevenRouse.png";

export default function AboutUs() {
    return (
        <div>
            <h2>About Us</h2>
            <h1>Papyrus/Scriptura/Ostraca</h1>
            <p>
                Mission: Empowers individuals to effortlessly capture, organize, and access their thoughts, ideas, and inspirations anytime, anywhere. Papyrus/Scriptura/Ostraca is dedicated to enhancing productivity, fostering creativity, and facilitating seamless collaboration in a digital age.
            </p>
            <div className="team-list-container">
                <h2>Meet Our Team</h2>
                <div className="team-list">
                    <ul>
                        <li>
                            <a href="https://github.com/AbrahamZambranoTablante" target="_blank" rel="noopener noreferrer">
                                <img src={AbrahamZambranoTablante} alt="Abraham Zambrano Tablante" />
                                <p>In my academic pursuits in Informatic Engineering, I'm fueled by an insatiable curiosity for technology. Thriving in the realm of algorithms, coding challenges, and problem-solving, I've gained proficiency in software development, database management, and system analysis.</p>
                                <p>GitHub: AbrahamZambranoTablante</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/MikesKids" target="_blank" rel="noopener noreferrer">
                                <img src={MichaelDantzler} alt="Michael Dantzler" />
                                <p>I am a husband, and father to 5 beautiful children (Elijah, Nyla, Zoey, Brandon and Raine). I have worked in the title insurance industry for the past 20 years. I am a title specialist, with a keen eye for detail. With my ability to pay attention to the most minuscule details, it has given me the unique position to excel in my industry. I have taken this unique ability, and decided to apply it to software development. I've generated so much success in spotting deficiencies, that my cohort coaches and fellows have given me the nickname “Hawkeye”. Like the Avenger, with the same name, I consider myself to be a regular person, with an exceptional eye for detail.</p>
                                <p>GitHub: MikesKids</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/incognito1025" target="_blank" rel="noopener noreferrer">
                                <img src={NikiKhanam} alt="Niki Khanam" />
                                <p>I'm a Pursuit fellow with a background in nonprofits who transitioned into software engineering out of a desire to automate tasks. I bring skills in database management, event planning, grant writing, fundraising, and development, all focused on furthering nonprofit missions. I'm passionate about staying relevant and am currently expanding my knowledge in computer science.</p>
                                <p>GitHub: incognito1025</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ROUSE-prog" target="_blank" rel="noopener noreferrer">
                                <img src={StevenRouse} alt="Steven Rouse" />
                                <p>I have been a self-taught software engineer for the last four years now. With a background in Audio-visual programming and project management, I love learning new cutting edge technology and applying it to a consumer-focused application.</p>
                                <p>GitHub: ROUSE-prog</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
