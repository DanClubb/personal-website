import Image from "next/image";
import cv from "../../public/cv-image.png";
import "./cv.css";

export default function CurriculumVitae() {
  return (
    <div className="cv-container">
      <Image src={cv} width={550} height={700} alt="CV" className="cv" />
    </div>
  );
}
