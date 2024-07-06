import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { LogoutButton } from "@/components/custom/LogoutButton";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  dob: string;
  username: string;
}

export default async function Dashboard() {
  const user = await getUserMeLoader();

  const formatDate = (dob: string) => {
    const date = new Date(dob);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF8F6]">
      <div className="flex flex-col items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>
            <Loader2 className="h-4 w-4 animate-spin" />
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-left justify-center py-12">
          <h2 className="text-lg font-semibold text-[#1E3A8A]">
            Username: {user.data.username}
          </h2>

          <h2 className="text-lg font-semibold text-[#1E3A8A]">
            Name: {user.data.firstname} {user.data.lastname}
          </h2>

          <h2 className="text-lg font-semibold text-[#1E3A8A]">
            Birthday: {formatDate(user.data.dob)}
          </h2>
        </div>

        <LogoutButton />
      </div>

      <div className="flex flex-col items-center mt-8">
        <h3 className="text-xl font-semibold text-[#1E3A8A]">No items here</h3>
        <p className="mt-2 text-sm text-[#1E3A8A]">Start adding your favorite post to your list</p>
        <Button className="mt-4" variant="outline">
          Explore
        </Button>
      </div>
    </div>
  );
}