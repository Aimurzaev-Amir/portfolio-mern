const newArticleType = "ARTICLESREDUCER/ADD-WORK";
const setCurrentArticleType = "ARTICLESREDUCER/CHANGE-ARTICLE-ID";
const setArticleData = "ARTICLESREDUCER/SET-ARTICLE-DATA"

let initialState = {
  Articles: [
    {
      id: 0,
      articleName: "Feedback form html + css + php + JavaScript + jQuery",
      articleDate: "28 February",
      articleSmallDescription:
        "Hello everyone, friends! In this article I want to share with you a simple feedback form for a site running on PHP, JavaScript and Jquery. This form has some additional functions, which are discussed in more detail later.",
      articlePreview: require("./img/articles/FEEDBACK FORM HTML + CSS + PHP + JAVASCRIPT + JQUERY/article4-main.png"),
      previewDescription: "article on portfolio site",
      urlAdress: "feedback-form-html+css+php+JavaScript+jQuery",
      comments: 3,
      likes: 8,
      fullVersion: [
        {
          id: 0,
          sectionTitle: null,
          sectionText: {
            text:
              "Hello everyone, friends! In this article I want to share with you a simple feedback form for a site running on PHP, JavaScript and AJAX. This form has some additional functions, which are discussed in more detail later. You don’t need any special skills to create this form, just knowledge of the basics of html layout, CSS3 and elementary logic will be enough.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 1,
          sectionTitle: null,
          sectionText: {
            text:
              "First of all, it is necessary to consider all the fields that will be available to us in this form.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/FEEDBACK FORM HTML + CSS + PHP + JAVASCRIPT + JQUERY/article4-main222.png"),
            imgWidth: "85%",
            imgPositioning: "auto",
          },
        },
        {
          id: 2,
          sectionTitle: {
            title: "The structure of the fields of the feedback form:",
            titlePosition: "",
          },
          sectionText: null,
          sectionList: [
            {
              id: 0,
              listItem: "Sender name",
            },
            {
              id: 1,
              listItem: "Telephone",
            },
            {
              id: 2,
              listItem: "Mailing address",
            },
            {
              id: 3,
              listItem: "Customer message",
            },
          ],
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 3,
          sectionTitle: {
            title: "Features of this form:",
            titlePosition: "left",
          },
          sectionText: null,
          sectionList: [
            {
              id: 0,
              listItem: "Inability to send messages without filling in all fields.",
            },
            {
              id: 1,
              listItem: "Lock the 'Send message' button while sending a message",
            },
            {
              id: 2,
              listItem: "Displays a success / failure window for sending a message.",
            },
            {
              id: 3,
              listItem: "Clearing the field after sending the message.",
            },
          ],
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 4,
          sectionTitle: {
            title: "What does the feedback form include?",
            titlePosition: "left",
          },
          sectionText: null,
          sectionList: [
            {
              id: 0,
              listItem: "HTML markup (layout creation)",
            },
            {
              id: 1,
              listItem: "Styling form fields in CSS",
            },
            {
              id: 2,
              listItem: "JavaScript + AJAX",
            },
            {
              id: 3,
              listItem: "PHP handler",
            },
          ],
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 5,
          sectionTitle: {
            title: "Feedback forms HTML markup:",
            titlePosition: "left",
          },
          sectionText: {
            text: "And so, let's look at the layout of the form:",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 6,
          sectionTitle: null,
          sectionText: {
            text: "HTML code Expample must be there",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 7,
          sectionTitle: null,
          sectionText: {
            text:
              "In this form, there are four fields to fill in, which have an id that will be used later in JavaScript. There is also a column with brief information about the site owner and links to social networking pages. At the end of the form is the submit button.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 8,
          sectionTitle: {
            title: "CSS Form Design",
            titlePosition: "left",
          },
          sectionText: {
            text:
              "All form fields are styled using CSS flexbox (Flexible Box Layout Module) and are divided into groups by additional classes. Of course, you can create your own styles. If you know CSS, then you can set the appearance for all form elements without any problems, then my help will not even be required.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 9,
          sectionTitle: null,
          sectionText: {
            text: "CSS code must be there",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 10,
          sectionTitle: {
            title: "PHP code setup",
            titlePosition: "left",
          },
          sectionText: {
            text: "Now let's move on to the form handler, which is written in PHP.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 11,
          sectionTitle: null,
          sectionText: {
            text: "PHP code must be there",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 12,
          sectionTitle: {
            title: "Additional features in JavaScript and jQuery",
            titlePosition: "left",
          },
          sectionText: {
            text: "Form field handler + sending a message without reloading the page (ajax)",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 13,
          sectionTitle: null,
          sectionText: {
            text: "JavaScript code must be there",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
        {
          id: 14,
          sectionTitle: null,
          sectionText: {
            text: "That's all. Connect the form, test and use. Good luck",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
          imgPositioning: null,
        },
      ],
    },
    {
      id: 1,
      articleName: "Useful extensions for beginners in VS Code",
      articleDate: "15 February",
      articleSmallDescription:
        "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring.",
      articlePreview: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/vscode-article.png"),
      previewDescription: "article on portfolio site",
      urlAdress: "useful-extensions-for-beginners-in-VSCode",
      comments: 2,
      likes: 5,
      fullVersion: [
        {
          id: 0,
          sectionTitle: null,
          sectionText: {
            text:
              "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. The source code is free and open source and released under the permissive MIT License. The compiled binaries are freeware and free for private or commercial use.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
        },
        {
          id: 1,
          sectionTitle: null,
          sectionText: {
            text:
              "I collected on this page the most convenient extensions for those who are just starting to work with VS Code. Some of them are the most necessary, some less, but all of them are very convenient.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
        },
        {
          id: 2,
          sectionTitle: {
            title: "Material Theme",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "The theme for VSCode, with the most convenient way to work, has more than 5 million different options. Material theme is the most popular theme in VSCode. This theme is ideal for fans of dark colors and for those who like to work at night.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/materialTheme-icon.png"),
            sectionImgDescr: "material theme",
            imgWidth: "10%",
            imgPositioning: "auto",
          },
        },
        {
          id: 3,
          sectionTitle: {
            title: "Live Server",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "This plugin is launched when you right-click on the HTML page, in the drop-down menu you need to select 'Open with Live Server'. After that, a tab with your project will open in the browser, which will refresh the page every time you make any changes to your project. It seems to me that this is not only convenient, but also effective. Since even a click on the reboot button takes a lot of time.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/liveServer-icon.png"),
            sectionImgDescr: "live server",
            imgWidth: "10%",
            imgPositioning: "auto",
          },
        },
        {
          id: 4,
          sectionTitle: {
            title: "CSS Peek",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "Thanks to this plugin, you can go to css definitions directly from the html file, for this you need to right-click on the definition in the html file, and then select 'Go to definition'. This plugin is very convenient when you have many classes and their search can take time.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/csspeak-icon.png"),
            sectionImgDescr: "css peak",
            imgWidth: "10%",
            imgPositioning: "auto",
          },
        },
        {
          id: 5,
          sectionTitle: {
            title: "Bracket Pair Colorizer",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "This plugin paints the opening and closing brackets in the corresponding colors. Most often it is used in Javascript.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/bracketPairColorizer-icon.png"),
            sectionImgDescr: "bracket pair colorizer",
            imgWidth: "10%",
            imgPositioning: "auto",
          },
        },
        {
          id: 6,
          sectionTitle: {
            title: "Prettier - Code formatter",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "The code formatting plugin that supports a wide range of languages. Bring any code to its normal form by pressing Ctrl + shift + p and selecting Format document in the drop-down menu. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/prettier-icon.png"),
            sectionImgDescr: "",
            imgWidth: "10%",
            imgPositioning: "auto",
          },
        },
        {
          id: 7,
          sectionTitle: {
            title: "Auto Rename Tag",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "A convenient plugin for html, which when you change the opening / closing tag, it automatically changes another opening / closing tag.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/autoRenameTag-icon.png"),
            sectionImgDescr: "auto rename tag",
            imgWidth: "10%",
            imgPositioning: "auto",
          },
        },
        {
          id: 8,
          sectionTitle: {
            title: "Path Autocomplete",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "This is a very simple plugin that is used in both js and html. When writing the path to the file, the plugin indicates which files and folders are in the project. Thanks to this plugin, there is no need to remember the names of the necessary files, you just select the one you need in Explorer.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/pathAutocomplete-icon.png"),
            sectionImgDescr: "path autocomplete",
            imgPositioning: "auto",
          },
        },
        {
          id: 9,
          sectionTitle: {
            title: "HTML CSS Support",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "If you have a lot of classes, identifiers in your work and you often have errors in the names when you write them manually, then this plugin is for you. This plugin automatically completes the name of the id or class for the html attribute based on the definitions found in your workspace or in the external files referenced by link.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/htmlCssSupport-icon.png"),
            sectionImgDescr: "html css support",
            imgWidth: "10%",
            imgPositioning: "auto",
          },
        },
        {
          id: 10,
          sectionTitle: {
            title: "Emmet",
            titlePosition: "center",
          },
          sectionText: {
            text:
              "Sorry for the banality, but I could not help but include this plugin in the list of must-haves for beginners. Emmet plugin support is already built into VSCode. Additionally, you do not need to install the plugin. Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/emmet-icon.png"),
            sectionImgDescr: "emmet",
            imgWidth: "10%",
            imgPositioning: "auto",
          },
        },
        {
          id: 11,
          sectionTitle: null,
          sectionText: {
            text: "You can install any of these plugins by going to the VSCode Market Place.",
            textPosition: "left",
          },
          sectionList: null,
          sectionImg: null,
        },
      ],
    },
    {
      id: 2,
      articleName: "Competitor site analysis services",
      articleDate: "01 February",
      articleSmallDescription:
        "Smart people learn from the mistakes of others and achievements. Also, companies that want to achieve great success can learn from the experience of their competitors. Observing competitors will help not only to identify their strengths and weaknesses, but also to understand what your company should strive for and in which direction to move.",
      articlePreview: require("./img/articles/COMPETITOR SITE ANALYSIS SERVICES/article3-main.jpg"),
      previewDescription: "article on portfolio site",
      urlAdress: "competitor-site-analysis-services",
      comments: 5,
      likes: 7,
      fullVersion: [
        {
          id: 0,
          sectionTitle: null,
          sectionText: {
            text:
              "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. The source code is free and open source and released under the permissive MIT License. The compiled binaries are freeware and free for private or commercial use.",
            textPosition: "",
          },
          sectionList: null,
          sectionImg: null,
        },
        {
          id: 1,
          sectionTitle: null,
          sectionText: {
            text:
              "I collected on this page the most convenient extensions for those who are just starting to work with VS Code. Some of them are the most necessary, some less, but all of them are very convenient.",
            textPosition: "",
          },
          sectionList: null,
          sectionImg: null,
        },
        {
          id: 2,
          sectionTitle: {
            title: "Material Theme",
            titlePosition: "",
          },
          sectionText: {
            text:
              "The theme for VSCode, with the most convenient way to work, has more than 5 million different options. Material theme is the most popular theme in VSCode. This theme is ideal for fans of dark colors and for those who like to work at night.",
            textPosition: "",
          },
          sectionList: null,
          sectionImg: {
            img: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/materialTheme-icon.png"),
            sectionImgDescr: "",
            imgPositioning: "articleImgCentering",
          },
        },
      ],
    },
  ],
  articles: null,
  currentArticleId: 1,
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case setArticleData:
      return {
        ...state,
        articles: action.newArticleData,
      };
    case setCurrentArticleType:
      return {
        ...state,
        currentArticleId: action.currentArticleId,
      };
    default:
      return state;
  }
};

export const setArticles = (newArticleData) => {
  return {
    type: setArticleData,
    newArticleData,
  };
};
export const setArticleId = (currentArticleId) => {
  return {
    type: setCurrentArticleType,
    currentArticleId,
  };
};

export default ArticlesReducer;
