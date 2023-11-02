import { motion } from "framer-motion"

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    x:"-300vw"
  },
  visble: {
    opacity: 1,
    x:"0vw"
  }
}

function LePrestigeLogoAnimated() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="722"
      height="200"
      fill="none"
      viewBox="0 0 1599 444"
      className="lePrestigeLogoAnimated"
    >
      <motion.g id="LePrestigeLogo">
        <motion.path
          id="SeparadorLogo"
          fill="#010101"
          d="M354.936 422.283h-11.399V21.796h11.399v400.487z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          strokeWidth="3"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:2 }
          }}
        ></motion.path>
        <motion.path
          id="VelaLogo"
          fill="#010101"
          d="M66.607.66v384.722h50.492c.849-16.696 6.917-116.315 73.23-174.247 33.06-28.875 67.829-39.417 88.119-43.677-28.876-28.458-57.739-56.916-86.615-85.374-27.462-27.077-54.938-54.144-82.4-81.221"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
          }}
        ></motion.path>
        <motion.path
          id="LLogo"
          fill="#010101"
          d="M278.45 417.331c-103.043-.546-146.945-1.091-250-1.637.303-160.377.636-254.656.97-415.032L.534 34.15v409.263h247.934"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
          }}
        ></motion.path>
        <motion.path
          id="L"
          fill="#010101"
          d="M415.708 311.391v-.589c0-5.64 10.666-6.229 10.666-16.599V125.274c0-10.959-10.666-10.67-10.666-16.599v-.589c0-2.365 2.364-3.553 5.926-3.553h37.345c3.552 0 5.925 1.188 5.925 3.553v.589c0 5.929-11.554 5.64-11.554 16.599v165.964c0 6.817 3.252 11.559 9.48 11.559h65.787c17.19 0 20.751-32.6 31.123-32.6h2.37c2.67 0 4.148 1.776 3.259 5.33l-7.399 32.6c-.88 4.452-2.977 6.817-7.421 6.817H421.634c-3.553 0-5.926-1.477-5.926-3.553z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.7 }
          }}
        ></motion.path>
        <motion.path
          id="P"
          fill="#010101"
          d="M772.553 231.372c36.154 0 58.973-19.264 58.973-51.864 0-43.27-31.699-62.823-65.787-62.823h-15.998c-5.343 0-7.711 3.253-7.711 9.482v94.535c0 6.817 3.556 10.67 10.673 10.67h19.85zm-68.157 79.723v-.599c0-5.03 10.97-5.63 10.97-16.3V125.278c0-9.782-10.97-10.97-10.97-16.299v-.889c0-2.376 2.36-3.564 6.222-3.564h55.121c49.488 0 93.362 19.265 93.362 68.464 0 45.347-32.318 70.53-86.548 70.53H742.03v50.676c0 10.67 11.562 11.27 11.562 16.3v.599c0 2.366-2.368 3.853-5.933 3.853h-37.041c-3.853 0-6.222-1.488-6.222-3.853z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.6 }
          }}
        ></motion.path>
        <motion.path
          id="E1"
          fill="#010101"
          d="M576.453 312.747v-.364c0-3.489 6.785-3.489 6.785-10.445V197.856c0-6.957-6.785-7.139-6.785-10.435v-.557c0-1.284 1.273-2.011 3.296-2.011h77.69c2.943 0 4.031 1.466 4.577 4.024l4.4 18.14c.546 2.569-.365 3.671-2.185 3.671h-.911c-5.683 0-10.071-18.322-19.606-18.322h-38.841c-3.298 0-5.14 1.83-5.14 6.228v45.989h33.352c6.969 0 6.788-10.809 10.629-10.809h.726c1.456 0 2.37 1.102 2.37 3.114v22.54c0 1.829-.914 3.114-2.37 3.114h-.726c-3.841 0-3.66-10.446-10.629-10.446h-33.352l-.304 47.455c0 4.217 2.22 7.877 6.792 7.877h43.055c9.709 0 12.824-18.868 19.243-18.868h1.089c1.638 0 2.579 1.648 2.215 3.66l-4.4 18.515c-.546 2.74-1.82 4.206-4.763 4.206h-82.452c-2.214 0-3.851-.727-3.851-2.194"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.7 }
          }}
        ></motion.path>
        <motion.path
          id="R"
          fill="#010101"
          d="M949.621 227.544c0-24.188-18.689-35.179-39.219-35.179h-12.273c-3.298 0-4.763 2.376-4.763 6.229v49.841c0 6.047 2.755 8.605 7.688 8.605h12.644c21.255 0 35.923-10.992 35.923-29.496zm26.93 84.838v.364c0 1.466-1.451 2.205-3.666 2.205h-25.472c-2.184 0-3.659-.739-3.659-2.205v-.364c0-3.478 7.876-3.478 3.659-10.263l-27.486-37.93c-1.456.182-2.909.182-4.578.182l-21.983.375v37.373c0 6.593 7.148 6.785 7.148 10.264v.363c0 1.467-1.452 2.205-3.667 2.205h-23.086c-2.185 0-3.659-.738-3.659-2.205v-.363c0-3.479 6.592-3.671 6.592-10.264V197.673c0-6.592-6.592-6.774-6.592-10.253v-.374c0-1.467 1.456-2.194 3.659-2.194h37.567c31.324 0 55.146 12.639 55.328 40.305 0 16.675-10.814 30.791-30.968 36.464l29.316 40.498c4.945 6.967 11.547 6.785 11.547 10.263z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.6 }
          }}
        ></motion.path>
        <motion.path
          id="E2"
          fill="#010101"
          d="M988.65 312.747v-.364c0-3.489 6.777-3.489 6.777-10.445V197.856c0-6.957-6.777-7.139-6.777-10.435v-.557c0-1.284 1.272-2.011 3.296-2.011h77.694c2.94 0 4.03 1.466 4.58 4.024l4.39 18.14c.55 2.569-.36 3.671-2.18 3.671h-.91c-5.68 0-10.07-18.322-19.61-18.322h-38.83c-3.3 0-5.14 1.83-5.14 6.228v45.989h33.34c6.97 0 6.79-10.809 10.63-10.809h.73c1.46 0 2.37 1.102 2.37 3.114v22.54c0 1.829-.91 3.114-2.37 3.114h-.73c-3.84 0-3.66-10.446-10.63-10.446h-33.34l-.31 47.455c0 4.217 2.22 7.877 6.79 7.877h43.05c9.71 0 12.83-18.868 19.25-18.868h1.09c1.64 0 2.58 1.648 2.22 3.66l-4.4 18.515c-.55 2.74-1.82 4.206-4.77 4.206h-82.447c-2.215 0-3.859-.727-3.859-2.194"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.5 }
          }}
        ></motion.path>
        <motion.path
          id="S"
          fill="#010101"
          d="M1093.82 284.53c0-4.216 2.4-7.331 6.97-7.331 13.19.557 8.61 32.429 45.45 32.429 17.4 0 29.31-10.071 29.31-24.552 0-45.624-78.25-11.173-78.25-66.141 0-20.346 16.5-35.736 45.63-35.736 31.16 0 47.46 17.231 47.46 29.871 0 4.399-2.58 7.331-7.51 7.331-13.74 0-6.78-30.052-40.49-30.052-18.51 0-28.41 10.809-28.41 24.733 0 42.692 78.43 10.81 78.43 66.152 0 21.983-21.26 35.543-46.91 35.543-35.92 0-51.68-21.073-51.68-32.247z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.4 }
          }}
        ></motion.path>
        <motion.path
          id="T"
          fill="#010101"
          d="M1236.74 312.747v-.364c0-3.489 6.78-3.671 6.78-10.263V192.73h-24.91c-9.35 0-10.45 19.788-15.76 19.788h-1.64c-1.85 0-2.76-1.102-2.4-3.66l2.95-19.981c.37-2.558 1.64-4.024 4.58-4.024h91.07c2.95 0 4.22 1.466 4.77 4.024l4.03 20.163c.54 2.376-.55 3.478-2.22 3.478h-1.81c-5.31 0-7.7-19.788-16.86-19.788h-25.3v109.39c0 6.592 7.15 6.774 7.15 10.263v.364c0 1.466-1.45 2.194-3.85 2.194h-22.9c-2.19 0-3.68-.728-3.68-2.194z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.3 }
          }}
        ></motion.path>
        <motion.path
          id="I"
          fill="#C48E46"
          d="M1319.21 312.382c0-3.297 6.59-3.479 6.59-10.082V197.683c0-6.603-6.59-6.785-6.59-10.264v-.363c0-1.467 1.46-2.205 3.66-2.205h22.9c2.22 0 3.68.738 3.68 2.205v.363c0 3.479-6.97 3.661-6.97 10.264V302.3c0 6.603 6.97 6.785 6.97 10.082v.363c0 1.467-1.46 2.205-3.68 2.205h-22.9c-2.18 0-3.66-.738-3.66-2.205v-.363z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="#c48e45"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.2 }
          }}
        ></motion.path>
        <motion.path
          id="G"
          fill="#010101"
          d="M1366.49 250.448c0-40.498 27.12-67.243 61.38-67.243 30.97 0 50.58 20.334 50.58 33.712 0 4.763-3.12 7.877-7.88 7.877-13.76 0-14.12-34.076-47.47-34.076-22.16 0-40.3 21.437-40.3 49.841 0 37.191 24.73 65.039 51.49 65.039 11.72 0 22.16-3.296 28.57-7.877V266.02c0-7.331-12.45-6.956-12.45-10.071v-.738c0-1.648 1.63-2.569 3.85-2.569l31.33.191c2.21 0 3.66.91 3.66 2.376v.739c0 3.114-10.8 2.74-10.8 10.071v28.404c0 3.842-1.09 5.865-4.77 8.798-9.53 7.877-24.74 13.56-43.79 13.56-33.72 0-63.4-30.415-63.4-66.333z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1.1 }
          }}
        ></motion.path>
        <motion.path
          id="E3"
          fill="#010101"
          d="M1503.18 312.747v-.364c0-3.489 6.78-3.489 6.78-10.445V197.856c0-6.957-6.78-7.139-6.78-10.435v-.557c0-1.284 1.28-2.011 3.3-2.011h77.69c2.94 0 4.04 1.466 4.58 4.024l4.4 18.14c.54 2.569-.36 3.671-2.18 3.671h-.91c-5.69 0-10.08-18.322-19.62-18.322h-38.83c-3.3 0-5.14 1.83-5.14 6.228v45.989h33.35c6.97 0 6.78-10.809 10.62-10.809h.74c1.45 0 2.36 1.102 2.36 3.114v22.54c0 1.829-.91 3.114-2.36 3.114h-.74c-3.84 0-3.65-10.446-10.62-10.446h-33.35l-.3 47.455c0 4.217 2.21 7.877 6.78 7.877h43.06c9.7 0 12.82-18.868 19.24-18.868h1.09c1.64 0 2.58 1.648 2.22 3.66l-4.4 18.515c-.55 2.74-1.82 4.206-4.76 4.206h-82.45c-2.22 0-3.86-.727-3.86-2.194"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="rgba(0, 0, 0, 1)"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0,0, 0, 1] },
            x:{delay:1 }
          }}
        ></motion.path>
        <motion.path
          id="Ipunto"
          fill="#C48E46"
          d="M1348.41 148.688c0 8.059-6.54 14.598-14.6 14.598-8.07 0-14.6-6.539-14.6-14.598 0-8.059 6.53-14.598 14.6-14.598 8.06 0 14.6 6.539 14.6 14.598z"
          variants={pathVariants}
          initial={pathVariants.hidden}
          animate={pathVariants.visble}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="#c48e45"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 4, ease: [0, 0.2, 1] },
            x:{delay:1.1 }
          }}
        ></motion.path>
      </motion.g>
    </motion.svg >
  );
}

export default LePrestigeLogoAnimated;
