import Image from "next/image";
import IMAGES from "@/public/images/Images";
import "./cv.css";

export default function CurriculumVitae() {
  return (
    <div className="cv-container">
      <Image src={IMAGES.cv} width={550} height={700} alt="CV" className="cv" />
    </div>
  );
}
