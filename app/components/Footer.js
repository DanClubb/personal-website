import IMAGES from "@/public/images/Images";
import Image from "next/image";

function Footer() {
    return (
        <footer>
            <div className="footer_personal-info">
                <div>
                    <h4>I&apos;m Daniel Clubb</h4>
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
                                />
                                LinkedIn
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
