import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-background px-4">
      <h1 className="text-lg font-semibold">PromptLab</h1>
      <Button variant="outline">Login</Button>
    </header>
  );
}