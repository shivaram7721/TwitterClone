import { atom } from "recoil";
// import SimpleDialogDemo from "../pages/RightSidePart/SimpleDialogDemo";

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const dateState = atom({
  key: "dateState",
  default: "",
});

export const mobileState = atom({
  key: "mobileState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const nameErrorState = atom({
  key: "nameErrorState",
  default: "",
});

export const emailErrorState = atom({
  key: "emailErrorState",
  default: "",
});

export const mobileErrorState = atom({
  key: "mobileErrorState",
  default: "",
});

export const passErrorState = atom({
  key: "passErrorState",
  default: "",
});

export const registeredState = atom({
  key: "registeredState",
  default: false,
  
});

export const createState = atom({
    key: "createState",
    default: true
})

export const matchState = atom({
    key: "matchState",
    default: ""
})


export const tweetsData = atom({
  key: "tweetsData",
  default:[]
})

export const popupState = atom({
  key: "popupState",
  default: false
})

// export const simpleDialogState = atom({
//   key: "simpleDialogState",
//   default:<SimpleDialogDemo/>
// })

export const isLogin = atom({
  key: "isLogin",
  default: JSON.parse(localStorage.getItem('isLogin')) || false
})