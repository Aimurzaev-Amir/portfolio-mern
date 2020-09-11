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

export default worksReducer;
