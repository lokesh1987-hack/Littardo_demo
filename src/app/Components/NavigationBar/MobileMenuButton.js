import { Bars4Icon } from "@heroicons/react/24/solid";

function MobileMenuButton({ onClick }) {
  return (
    <button className=" p-2" onClick={onClick}>
      <Bars4Icon className="text-black h-10 w-10 font-bold" />
    </button>
  );
}
export default MobileMenuButton;
