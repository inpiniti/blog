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
      nav: [
        {
          title: "문서",
          links: [
            {
              title: "stock",
              to: "/stock/tensorflow",
              description:
                "본 제품은 주식 예측 서비스로 신경망 모델을 구성하고 훈련하여 예측을 하는 서비스 입니다.",
            },
            {
              title: "travel",
              to: "/travel/introduction",
              description: "여행 플레너",
            },
            {
              title: "inpiniti finance",
              to: "/portfolio/portfolio/finace",
              description: "재무제표 라이브러리 사용법",
            },
          ],
        },
        {
          title: "제품",
          links: [
            {
              title: "stock",
              to: "https://stock.potatomap.com/",
              description: "주식예측 서비스 입니다.",
              target: "_blank",
            },
            {
              title: "potatomap",
              to: "https://potatomap.com/",
              description: "여행 플레너 입니다.",
              target: "_blank",
            },
            {
              title: "중고검색기",
              to: "https://wjd0r.github.io/",
              description: "중고검색 서비스 입니다.",
              target: "_blank",
            },
          ],
        },
        {
          title: "open source",
          links: [
            {
              title: "inpiniti finance",
              to: "https://github.com/inpiniti/inpinitiFinance",
              description: "재무재표 조회 라이브러리 입니다.",
              target: "_blank",
            },
          ],
        },
      ],
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
