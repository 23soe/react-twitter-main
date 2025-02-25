import { atom } from "recoil";
export type LanguageType = "jp" | "en";

export const languageState = atom<LanguageType>({
  key: "language",
  default: (localStorage.getItem("language") as LanguageType) || "jp",
});
