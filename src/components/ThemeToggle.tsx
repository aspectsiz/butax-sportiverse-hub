// ThemeToggle.tsx
import { useTheme } from "next-themes";
import { Switch } from "@heroui/react";
import { SunIcon } from "@/components/ui/lightIcons"; // Light Mod ikonunu içe aktar
import { MoonIcon } from "@/components/ui/darkIcons";   // Dark Mod ikonunu içe aktar

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark"; // Temanın dark modda olup olmadığını kontrol et

  const toggleTheme = (isSelected: boolean) => {
    setTheme(isSelected ? "dark" : "light");
  };

  return (
    <Switch
      isSelected={isDarkMode} // Doğru prop ismi kullanıldı
      color="success"
      endContent={<MoonIcon />}   // Dark Mod ikonunu kullan
      size="lg"
      startContent={<SunIcon />}   // Light Mod ikonunu kullan
      onValueChange={toggleTheme} // Doğru prop ismi kullanıldı ve fonksiyon güncellendi
      aria-label="Enable dark mode" // Erişilebilirlik için
    >
    </Switch>
  );
}