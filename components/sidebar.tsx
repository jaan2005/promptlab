import { Button } from "@/components/ui/button"; // Using the alias this time

export function Sidebar() {
  return (
    <nav className="flex w-64 flex-col gap-2 border-r bg-background p-4">
      <Button variant="ghost" className="justify-start">
        Dashboard
      </Button>
      <Button variant="ghost" className="justify-start">
        Explore
      </Button>
      <Button variant="ghost" className="justify-start">
        Settings
      </Button>
    </nav>
  );
}