import AdobeXDIcon from "./Assets/images/small-logos/logo-xd.svg";
import WebDevIcon from "./Assets/images/small-logos/logo-webdev.svg";
import SlackIcon from "./Assets/images/small-logos/logo-slack.svg";
import SpotifyIcon from "./Assets/images/small-logos/logo-spotify.svg";
import InvisionIcon from "./Assets/images/small-logos/logo-invision.svg";
import AtlassianIcon from "./Assets/images/small-logos/logo-atlassian.svg";
import Ivana from "./Assets/images/ivana-square.jpg";
import Kal from "./Assets/images/kal-visuals-square.jpg";
import Marie from "./Assets/images/marie.jpg";
import Ivanick from "./Assets/images/ivancik.jpg";
import Squares from "./Assets/images/ivana-squares.jpg";

export const headerContent = [
  { title: "Companies" },
  { title: "Members" },
  { title: "Budget" },
  { title: "Completion" },
];
export const bodyContent = {
  section: [
    {
      img: AdobeXDIcon,
      text: "Soft UI XD Version",
      budget: 14000,
      completion: 75,
      persons: [
        { img: Kal },
        { img: Marie },
        { img: Ivana },
        { img: Ivanick },
        { img: Squares },
      ],
    },
    {
      img: WebDevIcon,
      text: "Add Progress Track",
      budget: 3000,
      completion: 75,
      persons: [{ img: Marie }, { img: Ivanick }],
    },
    {
      img: SlackIcon,
      text: "Fix Platform Errors",
      budget: "Not set",
      completion: 75,
      persons: [{ img: Kal }, { img: Marie }, { img: Squares }],
    },
    {
      img: SpotifyIcon,
      text: "Launch our Mobile App",
      budget: 20500,
      completion: 75,
      persons: [{ img: Kal }, { img: Marie }, { img: Ivana }, { img: Ivanick }],
    },
    {
      img: InvisionIcon,
      text: "Redesign New Online Shop",
      budget: 500,
      completion: 75,
      persons: [{ img: Kal }, { img: Marie }, { img: Squares }],
    },
    {
      img: AtlassianIcon,
      text: "Add the New Pricing Page",
      budget: 2000,
      completion: 75,
      persons: [{ img: Kal }, { img: Marie }, { img: Ivana }],
    },
  ],
};
