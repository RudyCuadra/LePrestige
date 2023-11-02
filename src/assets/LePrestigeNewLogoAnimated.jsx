import { motion } from "framer-motion"

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    x: "-300vw"
  },
  visble: {
    opacity: 1,
    x: "0vw"
  }
}

function LePrestigeNewLogoAnimated() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="722"
      height="200"
      fill="none"
      viewBox="0 0 722 200"
      className="lePrestigeLogoAnimated"
    >
      <motion.g id="LePrestigeNewLogo">
        <motion.path
          id="LLogo"
          fill="url(#paint0_radial_109_19)"
          d="M125.571 188.146l-112.685-.035c-.022-28.391-.038-66.065-.038-94.453 0-28.016.016-65.645.038-93.658L0 15.036v184.889h112.013l13.558-11.779z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
          }}
        ></motion.path>
        <motion.path
          id="VelaLogo"
          fill="url(#paint1_radial_109_19)"
          d="M52.662 0H29.86v173.713h22.803c1.133-32.28 17.238-87.38 72.896-98.455L52.662 0z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
          }}
        ></motion.path>
        <motion.path
          id="L"
          fill="#000"
          d="M187.568 198.321v-.268c0-2.544 4.82-2.812 4.82-7.499V114.24c0-4.955-4.82-4.819-4.82-7.499v-.267c0-1.069 1.072-1.615 2.676-1.615h16.87c1.614 0 2.679.536 2.679 1.615v.267c0 2.68-5.223 2.544-5.223 7.499v74.975c0 3.079 1.472 5.222 4.284 5.222h29.724c7.766 0 9.361-14.726 14.058-14.726h1.088c1.204 0 1.872.801 1.472 2.408l-3.364 14.727c-.4 2.011-1.34 3.079-3.348 3.079h-58.24c-1.604 0-2.676-.668-2.676-1.604z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.7 }
          }}
        ></motion.path>
        <motion.path
          id="P"
          fill="#000"
          d="M317.984 198.201v-.268c0-2.259 4.952-2.543 4.952-7.363v-76.33c0-4.419-4.952-4.955-4.952-7.363v-.403c0-1.069 1.072-1.615 2.812-1.615h24.901c22.36 0 42.174 8.716 42.174 30.928 0 20.482-14.594 31.864-39.095 31.864h-13.79v22.893c0 4.82 5.223 5.088 5.223 7.364v.293c0 1.072-1.072 1.74-2.679 1.74h-16.734c-1.74-.016-2.812-.684-2.812-1.74zm30.792-36.015c16.334 0 26.645-8.716 26.645-23.429 0-19.546-14.326-28.384-29.724-28.384h-7.228c-2.411 0-3.483 1.472-3.483 4.284v42.694c0 3.079 1.614 4.819 4.823 4.819l8.967.016z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.6 }
          }}
        ></motion.path>
        <motion.path
          id="E1"
          fill="#000"
          d="M260.18 198.934v-.168c0-1.572 3.063-1.572 3.063-4.716v-47.019c0-3.145-3.063-3.228-3.063-4.717v-.248c0-.581.578-.91 1.488-.91h35.101c1.327 0 1.821.661 2.07 1.82l1.988 8.193c.249 1.159-.165 1.656-.994 1.656h-.413c-2.567 0-4.552-8.277-8.858-8.277h-17.548c-1.491 0-2.317.827-2.317 2.815v20.776h15.065c3.144 0 3.063-4.884 4.8-4.884h.323c.662 0 1.075.497 1.075 1.407v10.181c0 .83-.413 1.408-1.075 1.408h-.323c-1.737 0-1.656-4.716-4.8-4.716h-15.065l-.084 21.437c0 1.904.994 3.551 3.063 3.551h19.452c4.387 0 5.795-8.525 8.693-8.525h.494c.746 0 1.159.745.994 1.656l-1.985 8.36c-.248 1.24-.829 1.901-2.153 1.901H261.92c-.991.01-1.74-.319-1.74-.981z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.7 }
          }}
        ></motion.path>
        <motion.path
          id="R"
          fill="#000"
          d="M440.95 198.766v.168c0 .662-.646.991-1.656.991h-11.505c-.994 0-1.656-.323-1.656-.991v-.168c0-1.572 3.551-1.572 1.656-4.635l-12.418-17.135c-.688.072-1.379.1-2.07.084l-9.932.165v16.886c0 2.983 3.228 3.063 3.228 4.635v.168c0 .662-.646.991-1.656.991h-10.43c-.994 0-1.656-.323-1.656-.991v-.168c0-1.572 2.98-1.652 2.98-4.635V146.95c0-2.983-2.98-3.064-2.98-4.636v-.167c0-.662.646-.991 1.656-.991h16.97c14.155 0 24.917 5.71 24.998 18.209 0 7.534-4.884 13.906-13.991 16.463l13.235 18.293c2.231 3.157 5.227 3.073 5.227 4.645zm-12.186-38.333c0-10.923-8.442-15.891-17.712-15.891h-5.549c-1.489 0-2.15 1.075-2.15 2.815v22.515c0 2.731 1.239 3.874 3.476 3.874h5.714c9.6.022 16.221-4.942 16.221-13.313z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.6 }
          }}
        ></motion.path>
        <motion.path
          id="E2"
          fill="#000"
          d="M446.399 198.934v-.168c0-1.572 3.06-1.572 3.06-4.716v-47.019c0-3.145-3.06-3.228-3.06-4.717v-.248c0-.581.577-.91 1.488-.91h35.098c1.324 0 1.821.661 2.069 1.82l1.989 8.193c.248 1.159-.168 1.656-.994 1.656h-.414c-2.582 0-4.554-8.277-8.857-8.277h-17.551c-1.488 0-2.318.827-2.318 2.815v20.776h15.069c3.144 0 3.06-4.884 4.8-4.884h.322c.665 0 1.079.497 1.079 1.407v10.181c0 .83-.414 1.408-1.079 1.408h-.322c-1.74 0-1.656-4.716-4.8-4.716h-15.069l-.081 21.437c0 1.904.995 3.551 3.064 3.551h19.452c4.387 0 5.81-8.525 8.69-8.525h.497c.746 0 1.159.745.994 1.656l-1.988 8.36c-.246 1.24-.827 1.901-2.15 1.901h-37.252c-.991.01-1.736-.319-1.736-.981z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.5 }
          }}
        ></motion.path>
        <motion.path
          id="S"
          fill="#000"
          d="M493.912 185.357c0-1.904 1.078-3.312 3.147-3.312 5.959.249 3.874 14.652 20.527 14.652 7.864 0 13.235-4.551 13.235-11.091 0-20.611-35.343-5.049-35.343-29.882 0-9.191 7.447-16.141 20.611-16.141 14.071 0 21.437 7.783 21.437 13.494 0 1.988-1.159 3.312-3.393 3.312-6.207 0-3.063-13.577-18.293-13.577-8.361 0-12.831 4.884-12.831 11.175 0 19.287 35.427 4.884 35.427 29.885 0 9.933-9.6 16.056-21.189 16.056-16.214-.003-23.335-9.522-23.335-14.571z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.4 }
          }}
        ></motion.path>
        <motion.path
          id="T"
          fill="#000"
          d="M558.482 198.934v-.168c0-1.572 3.061-1.652 3.061-4.635v-49.418h-11.257c-4.222 0-4.719 8.941-7.101 8.941h-.746c-.83 0-1.243-.497-1.078-1.656l1.327-9.022c.164-1.159.745-1.82 2.069-1.82h41.131c1.324 0 1.902.661 2.15 1.82l1.824 9.103c.245 1.078-.248 1.575-.994 1.575h-.83c-2.398 0-3.476-8.941-7.615-8.941h-11.424v49.418c0 2.983 3.228 3.063 3.228 4.635v.168c0 .662-.661.991-1.736.991h-10.33c-1.017 0-1.679-.329-1.679-.991z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.3 }
          }}
        ></motion.path>
        <motion.path
          id="I"
          fill="#000"
          d="M595.731 198.766c0-1.488 2.979-1.572 2.979-4.551V146.95c0-2.983-2.979-3.064-2.979-4.636v-.167c0-.662.645-.991 1.656-.991h10.346c.994 0 1.656.322 1.656.991v.167c0 1.572-3.145 1.653-3.145 4.636v47.265c0 2.979 3.145 3.063 3.145 4.551v.168c0 .662-.646.991-1.656.991h-10.346c-.995 0-1.656-.323-1.656-.991v-.168z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.2 }
          }}
        ></motion.path>
        <motion.path
          id="G"
          fill="#000"
          d="M617.091 169.959c0-18.293 12.25-30.379 27.728-30.379 13.991 0 22.848 9.191 22.848 15.233 0 2.15-1.407 3.551-3.55 3.551-6.208 0-6.376-15.394-21.441-15.394-10.007 0-18.209 9.684-18.209 22.515 0 16.802 11.175 29.375 23.261 29.375 5.297 0 10.007-1.491 12.912-3.55v-14.314c0-3.311-5.63-3.144-5.63-4.551v-.323c0-.746.746-1.159 1.74-1.159l14.155.084c.994 0 1.656.413 1.656 1.075v.323c0 1.407-4.884 1.24-4.884 4.551v12.832c0 1.737-.497 2.647-2.153 3.974-4.306 3.55-11.175 6.133-19.785 6.133-15.239-.01-28.648-13.748-28.648-29.976z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1.1 }
          }}
        ></motion.path>
        <motion.path
          id="E3"
          fill="#000"
          d="M678.856 198.934v-.168c0-1.572 3.063-1.572 3.063-4.716v-47.019c0-3.145-3.063-3.228-3.063-4.717v-.248c0-.581.581-.91 1.491-.91h35.099c1.323 0 1.82.661 2.069 1.82l1.985 8.193c.249 1.159-.165 1.656-.994 1.656h-.413c-2.583 0-4.552-8.277-8.858-8.277h-17.548c-1.491 0-2.317.827-2.317 2.815v20.776h15.065c3.144 0 3.063-4.884 4.8-4.884h.323c.661 0 1.075.497 1.075 1.407v10.181c0 .83-.414 1.408-1.075 1.408h-.323c-1.737 0-1.656-4.716-4.8-4.716H689.37l-.084 21.437c0 1.904.994 3.551 3.063 3.551h19.433c4.387 0 5.794-8.525 8.693-8.525h.497c.742 0 1.159.745.991 1.656l-1.985 8.36c-.249 1.24-.83 1.901-2.153 1.901h-37.242c-.994.01-1.727-.319-1.727-.981z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0, 0, 1] },
            x: { delay: 1 }
          }}
        ></motion.path>
      </motion.g>
      <defs>
        <radialGradient
          id="paint0_radial_109_19"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(151.301 0 0 164.918 11.046 147.188)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1153FA"></stop>
          <stop offset="0.5" stopColor="#0A0A6C"></stop>
          <stop offset="0.73" stopColor="#1312B4"></stop>
          <stop offset="0.91" stopColor="#1919EA"></stop>
          <stop offset="1" stopColor="#1C1BFF"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_109_19"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(88.6709 0 0 143.647 59.09 48.263)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1154FC"></stop>
          <stop offset="0.49" stopColor="#0A0A6C"></stop>
          <stop offset="0.58" stopColor="#0A0A71"></stop>
          <stop offset="0.69" stopColor="#0C0C7E"></stop>
          <stop offset="0.81" stopColor="#0E0E95"></stop>
          <stop offset="0.92" stopColor="#1111B4"></stop>
          <stop offset="1" stopColor="#1414CC"></stop>
        </radialGradient>
      </defs>
    </motion.svg>
  );
}

export default LePrestigeNewLogoAnimated;
