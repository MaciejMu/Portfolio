"use client";
import style from "./ThemeSwitch.module.scss";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <SunIcon className={style.icon} onClick={() => setTheme("light")} />
      ) : (
        <MoonIcon className={style.icon} onClick={() => setTheme("dark")} />
      )}
    </>
  );
};

export default ThemeSwitch;
