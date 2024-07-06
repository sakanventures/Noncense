import { logoutAction } from "@/data/actions/auth-actions";
import { LogOut } from "lucide-react";
import { FaArrowRightToBracket } from "react-icons/fa6";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit">
        <FaArrowRightToBracket className="w-6 h-6 hover:text-gray-500 transition-colors duration-300  text-black"/>
      </button>
    </form>
  );
}