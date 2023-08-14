import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div>
            Landing Page (unprotected)

            <div>
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}
