import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <div>
            <p>Dashboard Page (Authorized)</p>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}
