import LogoImage from "../assets/logo.svg";

function Logo() {
  return (
    <div className="bg-brand rounded-e-3xl h-[6.5rem] flex p-8 after:bottom-0 after:right-0 after:h-1/2 after:bg-accent after:absolute after:w-full relative z-10 after:z-[-1] after:rounded-tl-3xl after:rounded-br-3xl">
      <img src={LogoImage} alt="Invoice" />
    </div>
  );
}

export default Logo;
