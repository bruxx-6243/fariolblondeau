import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

const IconStyles = "h-[1.2rem] w-[1.2rem]";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(
    ((typeof window !== "undefined" &&
      localStorage.getItem("theme")) as Theme) ?? "light"
  );
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme =
      typeof window !== "undefined" && localStorage.getItem("theme");
    setTheme(storedTheme as Theme);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      aria-label="Toggle Theme">
      {theme === "light" ? (
        <MoonIcon className={cn(IconStyles)} />
      ) : (
        <SunIcon className={cn(IconStyles)} />
      )}
    </Button>
  );
}
