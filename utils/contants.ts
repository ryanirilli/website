import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";

export interface SocialIcon {
  DisplayIcon: IconType;
  label: string;
  url: string;
}

export const socialIcons: SocialIcon[] = [
  {
    DisplayIcon: FaLinkedin,
    label: "linkedin link",
    url: "https://www.linkedin.com/in/ryanirilli/",
  },
  {
    DisplayIcon: FaGithub,
    label: "github link",
    url: "https://github.com/ryanirilli",
  },
  {
    DisplayIcon: FaTwitter,
    label: "twitter link",
    url: "https://twitter.com/ryanirilli",
  },
];
