import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
  import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
  import Link from "next/link";
  import { logoutAction } from "@/data/actions/auth-actions";
  import { LuLayoutDashboard } from "react-icons/lu";
  import { LuStar } from "react-icons/lu";
  import { LuSettings } from "react-icons/lu";
  import { LuLogOut } from "react-icons/lu";
  
  interface ImageData {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
          thumbnail: {
            url: string;
          };
          small: {
            url: string;
          };
          medium: {
            url: string;
          };
          large: {
            url: string;
          };
        };
        url: string;
      };
    };
  }
  
  interface UserData {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    avatarUrl?: string;
  }
  
  interface DropProps {
    user?: {
      data: UserData;
    };
  }
  
  export default function UserDrop({ user }: DropProps) {
    console.log("----------->user navbar====================>", user);
    const baseUrl = "http://localhost:1337";
    const userData = user?.data;

    const getInitials = (firstName: string, lastName: string) => {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`;
      };
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-8 w-8">
            <AvatarImage src={userData?.avatarUrl || "/placeholder-user.jpg"} />
            <AvatarFallback>
                {userData ? getInitials(userData.firstname, userData.lastname) : "G"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-3 mr-2">
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <div>
                <div className="font-medium">
                  {user && userData
                    ? `${userData?.firstname} ${userData?.lastname}`
                    : "Guest"}
                </div>
                <div className="text-sm text-muted-foreground break-all">
                  {user && userData ? userData.email : "guest@example.com"}
                </div>
              </div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link
                href="/dashboard"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <LuLayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/favorites"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <LuStar className="h-4 w-4" />
                <span>Favorites</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/settings"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <LuSettings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form action={logoutAction}>
              <button type="submit">
                <div className="flex items-center gap-2">
                  <LuLogOut className="h-4 w-4" />
                  <span>Logout</span>
                </div>
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }