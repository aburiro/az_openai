import image_1 from "../assets/images/img.png";
// method 3:
function Footer() {
  return (
    <div
      className={
        "bg-dark p-4 text-white d-flex align-items-center justify-content-center"
      }
    >
      <div>
        <img
          height={50}
          className="d-block w-10"
          src={image_1}
          alt="Second slide"
        />
      </div>
      copyrights @{new Date().getFullYear()} All copy rights are reserved by
      Sukkur IBA University
    </div>
  );
}

export default Footer;
