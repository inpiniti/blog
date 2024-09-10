export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "shadcn-docs-nuxt",
      description:
        "Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.",
    },
    theme: {
      customizable: true,
      color: "blue",
      radius: 0.5,
    },
    header: {
      title: "potatomap",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/favicon-96x96.png",
        dark: "/favicon-96x96.png",
      },
      nav: [],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/inpiniti",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "Copyright © 2024",
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/inpiniti",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "주식예측 서비스",
          icon: "lucide:chart-spline",
          to: "https://stock.potatomap.com/",
          target: "_blank",
        },
        {
          title: "여행 플레너",
          icon: "lucide:plane",
          to: "https://potatomap.com/",
          target: "_blank",
        },
        {
          title: "중고 검색기",
          icon: "lucide:search",
          to: "https://wjd0r.github.io/",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
