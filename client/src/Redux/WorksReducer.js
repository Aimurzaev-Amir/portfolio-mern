const setWorkData = "WORKSREDUCER/SET/WORK/DATA";
const setWorkStyle = "WORKSREDUCER/SET-WORK-STYLE";
const setWorkColors = "WORKSREDUCER/SET-WORK-COLORS";
const setPointWhatIDid = "WORKSREDUCER/SET-POINT-WHATIDID";
const setWorkDesktopImg = "WORKSREDUCER/SET-WORK-DESKTOP-IMG";
const setWorkMobileImg = "WORKSREDUCER/SET-WORK-MOBILE-IMG";
const setMainPhoto = "WORKSREDUCER/SET-MAIN-PHOTO";
const setMainBackground = "WORKSREDUCER/SET-MAIN-BACKGROUND";
const setWorkPreview = "WORKSREDUCER/SET-WORK-PREVIEW";
const setCurrentWorkType = "WORKSREDUCER/SET-WORK-ID";
const setImages = "WORKSREDUCER/SET-IMAGES";

let initialState = {
  Works: [
    {
      id: 0,
      workName: "KazTransGas",
      smallDescription: "Website",
      whatIDid: "UX   |   UI   |   WEB DEVELOPMENT",
      workPreview: require("./img/work-cards/kaztransgas-card.png"),
      workBackground: require("./img/work-kaztransgas/kaztransgas-main-bg.jpg"),
      workPhoto: require("./img/work-kaztransgas/kaztransgas-main-logo.png"),
      previewDescription: "kaztransgas redesign website Aimurzaev Amir",
      urlAdress: "kaztransgas",
      onlineUrl: "https://aimurzaev-amir.github.io/kaztransgas/",
      additional: {
        workTitle:
          "KazTransGas JSC is the main gas energy and gas transportation company of the Republic of Kazakhstan, representing the interests of the state in both the domestic and foreign gas markets.",
        aboutProject:
          "KazTransGas is a reliable supplier of gas to consumers in the Central Asian region of the gas transmission network, a unified system of domestic gas supply. The main task was to make a complete redesign of the company’s website, as the previous design was outdated and not effective. The goal was also to improve the site’s interface according to all modern trends, optimize it for browsers and develop a mobile version of the website.",
        fontName: "Roboto",
        textStyles: [
          {
            id: 0,
            name: "H1 - Text Styles",
            size: 30,
            weight: "bold",
          },
          {
            id: 1,
            name: "H2 - Text Styles",
            size: 16,
            weight: "500",
          },
          {
            id: 2,
            name: "H3 - Text Styles",
            size: 15,
            weight: "300",
          },
        ],
        colors: [
          {
            id: 0,
            color: "#007ab9",
          },
          {
            id: 1,
            color: "#000",
          },
          {
            id: 2,
            color: "#ffffff",
          },
          {
            id: 3,
            color: "#f3f4f4",
          },
        ],
        whatIDid: [
          {
            id: 0,
            name: "Front-end",
          },
          {
            id: 1,
            name: "Website Design",
          },
          {
            id: 2,
            name: "CMS",
          },
          {
            id: 3,
            name: "Responsive Design",
          },
        ],
        technologyUsed: "HTML, CSS3, CMS, PHP, JavaScript, JQuery, Photoshop, Figma",
        desktopImg: [
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas1.png"),
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas2.png"),
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas3.png"),
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas4.png"),
          },
        ],
        mobileImg: [
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/KazTransGas-mobile-menu.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas5.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
        ],
      },
    },
    {
      id: 1,
      workName: "Be Dentist",
      smallDescription: "Website",
      whatIDid: "UX   |   UI   |   WEB DEVELOPMENT",
      workPreview: require("./img/work-cards/bedentist-card.png"),
      workBackground: require("./img/work-bedentist/main-img.png"),
      workPhoto: require("./img/work-bedentist/bedentist-work-logo.png"),
      previewDescription: "Be Dentist dental clinic website",
      urlAdress: "bedentist",
      additional: {
        workTitle:
          "KazTransGas JSC is the main gas energy and gas transportation company of the Republic of Kazakhstan, representing the interests of the state in both the domestic and foreign gas markets.",
        aboutProject:
          "KazTransGas is a reliable supplier of gas to consumers in the Central Asian region of the gas transmission network, a unified system of domestic gas supply. The main task was to make a complete redesign of the company’s website, as the previous design was outdated and not effective. The goal was also to improve the site’s interface according to all modern trends, optimize it for browsers and develop a mobile version of the website.",

        fontName: "Roboto",
        textStyles: [
          {
            name: "H1 - Text Styles",
            size: "30px",
            weight: "bold",
          },
          {
            name: "H2 - Text Styles",
            size: "16px",
            weight: "500",
          },
          {
            name: "H3 - Text Styles",
            size: "15px",
            weight: "300",
          },
        ],
        colors: [
          {
            color: "#007ab9",
          },
          {
            color: "#000",
          },
          {
            color: "#ffffff",
          },
          {
            color: "#f3f4f4",
          },
        ],
        whatIDid: [
          {
            name: "Front-end",
          },
          {
            name: "Website Design",
          },
          {
            name: "CMS",
          },
          {
            name: "Responsive Design",
          },
        ],
        technologyUsed: "HTML, CSS3, CMS, PHP, JavaScript, JQuery, Photoshop, Figma",
        desktopImg: [
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas4.png"),
            imgDescr: "",
          },
        ],
        mobileImg: [
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas5.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
        ],
      },
    },
    {
      id: 2,
      workName: "Move",
      smallDescription: "Online Shop",
      whatIDid: "UX   |   UI   |   WEB DEVELOPMENT",
      workPreview: require("./img/work-cards/move-card.png"),
      workBackground: require("./img//work-move/main-move-bg.jpg"),
      workPhoto: require("./img/work-move/move-main-logo.png"),
      previewDescription: "Move online shop website",
      urlAdress: "move",
      additional: {
        workTitle:
          "KazTransGas JSC is the main gas energy and gas transportation company of the Republic of Kazakhstan, representing the interests of the state in both the domestic and foreign gas markets.",
        aboutProject:
          "KazTransGas is a reliable supplier of gas to consumers in the Central Asian region of the gas transmission network, a unified system of domestic gas supply. The main task was to make a complete redesign of the company’s website, as the previous design was outdated and not effective. The goal was also to improve the site’s interface according to all modern trends, optimize it for browsers and develop a mobile version of the website.",
        fontName: "Roboto",
        textStyles: [
          {
            name: "H1 - Text Styles",
            size: "30px",
            weight: "bold",
          },
          {
            name: "H2 - Text Styles",
            size: "16px",
            weight: "500",
          },
          {
            name: "H3 - Text Styles",
            size: "15px",
            weight: "300",
          },
        ],
        colors: [
          {
            color: "#007ab9",
          },
          {
            color: "#000",
          },
          {
            color: "#ffffff",
          },
          {
            color: "#f3f4f4",
          },
        ],
        whatIDid: [
          {
            name: "Front-end",
          },
          {
            name: "Website Design",
          },
          {
            name: "CMS",
          },
          {
            name: "Responsive Design",
          },
        ],
        technologyUsed: "HTML, CSS3, CMS, PHP, JavaScript, JQuery, Photoshop, Figma",
        desktopImg: [
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas4.png"),
            imgDescr: "",
          },
        ],
        mobileImg: [
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas5.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
        ],
      },
    },
  ],
  works: [],
  currentWorkId: null,
  newWork: {
    id: 0,
    workName: "",
    smallDescription: "",
    whatIDid: "UX   |   UI   |   WEB DEVELOPMENT",
    workPreview: null,
    workBackground: null,
    workPhoto: null,
    previewDescription: "",
    photoDescription: "",
    urlAdress: "beAble",
    onlineUrl: "",
    additional: {
      workTitle: "",
      aboutProject: "",
      fontName: "",
      textStyles: [],
      colors: [],
      whatIDid: [],
      technologyUsed: "",
      desktopImg: [],
      mobileImg: [],
    },
  },
  images: [],
};

const worksReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCurrentWorkType:
      return {
        ...state,
        currentWorkId: action.currentWorkId,
      };
    case setWorkData:
      return {
        ...state,
        works: action.workData,
      };

    case setWorkStyle:
      return {
        ...state,
        works: state.works.map((work) => {
          if (work._id === state.currentWorkId) {
            return {
              ...work,
              textStyles: action.newStylesData,
            };
          }
          return work;
        }),
      };

    case setWorkColors:
      return {
        ...state,
        works: state.works.map((work) => {
          if (work._id === state.currentWorkId) {
            return {
              ...work,
              colors: action.newColorData,
            };
          }
          return work;
        }),
      };

    case setPointWhatIDid:
      return {
        ...state,
        works: state.works.map((work) => {
          if (work._id === state.currentWorkId) {
            return {
              ...work,
              whatIDid: action.newPoint,
            };
          }
          return work;
        }),
      };

    case setImages:
      return {
        ...state,
        images: action.imagesData,
      };

    case setWorkDesktopImg:
      let newDImg = {
        id: state.newWork.additional.desktopImg.length,
        img: action.newDesctopImgData.img,
        imgDescr: action.newDesctopImgData.imgDesct,
      };
      return {
        ...state,
        desktopImg: [...state.newWork.additional.desktopImg, newDImg],
      };

    case setWorkMobileImg:
      let newMImg = {
        id: state.newWork.additional.mobileImg.length,
        img: action.newMobileImg.img,
        imgDescr: action.newMobileImg.imgDesct,
      };
      return {
        ...state,
        mobileImg: [...state.newWork.additional.mobileImg, newMImg],
      };

    case setMainPhoto:
      return {
        ...state,
        newWork: { ...state.newWork, workPhoto: action.mainPhoto },
      };

    case setMainBackground:
      return {
        ...state,
        newWork: { ...state.newWork, workBackground: action.mainBackground },
      };

    case setWorkPreview:
      return {
        ...state,
        newWork: { ...state.newWork, workPreview: action.workPreview },
      };

    default:
      return state;
  }
};

export const setWork = (workData) => {
  return {
    type: setWorkData,
    workData,
  };
};

export const setWorkId = (currentWorkId) => {
  return {
    type: setCurrentWorkType,
    currentWorkId,
  };
};

export const setStyle = (newStylesData) => {
  return {
    type: setWorkStyle,
    newStylesData,
  };
};

export const setColor = (newColorData) => {
  return {
    type: setWorkColors,
    newColorData,
  };
};

export const setWhatIDid = (newPoint) => {
  return {
    type: setPointWhatIDid,
    newPoint,
  };
};

export const setImagesData = (imagesData) => {
  return {
    type: setImages,
    imagesData,
  };
};

export const setDesktopImg = (newDesctopImgData) => {
  return {
    type: setWorkDesktopImg,
    newDesctopImgData,
  };
};

export const setMobileImg = (newMobileImg) => {
  return {
    type: setWorkMobileImg,
    newMobileImg,
  };
};

export const changePhoto = (mainPhoto) => {
  return {
    type: setMainPhoto,
    mainPhoto,
  };
};

export const changeBackground = (mainBackground) => {
  return {
    type: setMainBackground,
    mainBackground,
  };
};

export const changePreview = (workPreview) => {
  return {
    type: setWorkPreview,
    workPreview,
  };
};

export default worksReducer;
