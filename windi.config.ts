import { defineConfig } from "windicss/helpers";

export default defineConfig({
  shortcuts: {
    "nav-link": "text-center pt-2 h-full hover:(text-secondary-4)",
    "nav-link-active": "text-secondary-4 border-b border-b-hovered border-b-2px",
    highlight: "hover:text-secondary-4 cursor-pointer",
    'contact-form': 'bg-primary-2 border w-full rounded px-2 py-1 outline-none focus:border-focus',
  },
  theme: {
    borderColor: {
      DEFAULT: "#1E2D3D",
      hovered: "#FEA55F",
      focus: '#607B96',
    },
    colors: {
      "primary-1": "#01080E",
      "primary-2": "#011627",
      "primary-3": "#011221",
      "secondary-1": "#607B96",
      "secondary-2": "#3C9D93",
      "secondary-3": "#4D5BCE",
      "secondary-4": "#FFFFFF",
      "accent-1": "#FEA55F",
      "accent-2": "#43D9AD",
      "accent-3": "#E99287",
      "accent-4": "#C98BDF",
      lines: "#1E2D3D",
    },
  },
});
