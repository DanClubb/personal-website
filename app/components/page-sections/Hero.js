import Image from "next/image";
import { Fragment } from "react";
import heroDevices from "../../../public/hero-devices.svg";

function Hero() {
    return (
        <Fragment>
            <div className="hero__text">
                <h1 className="hero__text--header">
                    Hi, I&apos;m{" "}
                    <span className="hero__text--name">Daniel Clubb</span>
                </h1>
                <h2 className="hero__text--sub-header">Frontend Developer</h2>
                <p className="hero__text--paragraphy">
                    I am a frontend developer who loves problem solving while
                    creating complex functionality and implementing designs with
                    pixel-perfect accuracy.
                    <br />
                    Away from the keyboard I enjoy learning new skills, keeping
                    fit and recharging my batteries while socialising with
                    friends
                </p>
            </div>

            <div className="hero__devices-container">
                <Image
                    src={heroDevices}
                    fill={true}
                    alt="collection of devices I use while working"
                    className="hero__devices"
                    priority
                />
            </div>
        </Fragment>
    );
}

export default Hero;
