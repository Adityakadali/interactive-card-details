import back from "../assets/bg-card-back.png";

function CardBack({ cvv = "000" }) {
  return (
    <div className="relative left-20 drop-shadow-md">
      <img className="h-50" src={back} alt="" />
      <p className="absolute text-white top-[110px] right-16 font-bold tracking-wider">
        {cvv}
      </p>
    </div>
  );
}

export default CardBack;
