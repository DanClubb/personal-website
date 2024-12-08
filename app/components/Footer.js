import IMAGES from "@/public/images/Images";
import Image from "next/image";

function Footer() {
    return (
        <footer>
            <div className="footer_personal-info">
                <div>
                    <h3>Daniel Clubb</h3>
                    <p>software developer</p>
                </div>
                <div>
                    <ul className="footer_links">
                        <li>
                            <a
                                href="https://github.com/DanClubb"
                                target="_blank"
                            >
                                <Image
                                    src={IMAGES.githubLogo}
                                    width={30}
                                    height={30}
                                    alt="github logo"
                                />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/dan-clubb"
                                target="_blank"
                            >
                                <Image
                                    src={IMAGES.LinkedIn}
                                    width={30}
                                    height={30}
                                    alt="linkedin logo"
                                />
                                LinkedIn
                            </a>
                        </li>
                        <li>
                              <a
                                href="https://fragrancefinds.co.uk"
                                target="_blank"
                            >
                                Fragrance Finds
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer_site-tech">Next.js v13.4.0 | CSS3</div>
        </footer>
    );
}

export default Footer;
