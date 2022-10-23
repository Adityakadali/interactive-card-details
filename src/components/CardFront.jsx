import front from "../assets/bg-card-front.png";
import logo from "../assets/card-logo.svg";

function CardFront({
  name = "Jhon Doe",
  cardNum = "0000 0000 0000 0000",
  expiry = "00/00",
}) {
  return (
    <div className="relative drop-shadow-md">
      <img className="h-50" src={front} alt="" />
      <img className="absolute top-10 left-8" src={logo} alt="" />
      <p className="absolute text-3xl text-white top-1/2 left-10 tracking-wider">
        {cardNum}
      </p>
      <p className="absolute text-white bottom-6 left-8">{name}</p>
      <p className="absolute text-white bottom-6 right-8">{expiry}</p>
    </div>
  );
}

export default CardFront;
