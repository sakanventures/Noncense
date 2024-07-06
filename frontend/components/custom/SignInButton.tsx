import { Button } from "@/components/ui/button";
import { getUserMeLoader } from '@/data/services/get-user-me-loader';

// export async function SignInButton() {
    // const user = await getUserMeLoader();
    // console.log(user);

export function SignInButton(){

    return(
        <Button size="sm" variant="outline">
          Sign In
        </Button>
    )
}