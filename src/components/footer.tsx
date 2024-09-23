import { Logo } from "../../public/images/Logo";
import { PlayStoreSvg } from "../../public/images/playStore";

export default function Footer() {
  return (
    <footer className="footer bg-white text-base-content p-10 font-sans h-96 sm:px-24 xl:px-32 2xl:px-40 text-center w-full  relative">
      <nav className="">
        <Logo width="50" height="50" />
      </nav>

      <nav className="flex flex-col gap-5">
        <h6 className="font-semibold text-lg">Company</h6>
        <a className="link link-hover ">About</a>
        <a className="link link-hover ">Privacy</a>
        <a className="link link-hover ">Privacy & Terms</a>
      </nav>
      <nav className="flex flex-col gap-5 ">
        <h6 className="font-semibold text-lg">Support</h6>
        <a className="link link-hover">Chat with us</a>
        <a className="link link-hover">help center</a>
        <a className="link link-hover">Feature request</a>
      </nav>
      <nav className="flex flex-col gap-5  ">
        <h6 className="font-semibold text-lg">Community</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Discord</a>
      </nav>
      <nav className="flex flex-col gap-5 ">
        <h6 className="font-semibold text-lg">More</h6>
        <a className="link link-hover">Buttons</a>
        <a className="link link-hover">Brand assests</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav className="flex flex-col gap-5 md:hidden">
        <PlayStoreSvg className="" />
      </nav>

      <PlayStoreSvg className="absolute bottom-0 left-[365px] md:block hidden" />
    </footer>
  );
}
