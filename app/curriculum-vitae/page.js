import "./cv.css";

export default function page() {
    return (
        <div className="pdf">
            <iframe
                src="/cv.pdf" // path to the PDF file in the public directory
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="yes"
            ></iframe>
        </div>
    );
}
