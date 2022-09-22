export interface IAuth {
  isLoggedIn: boolean;
  loginMethod: string;
  email: string;
  password: string;
  showPassword: boolean;
  recoveringPassword: boolean;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface ICategories {
  categories: ICategory[];
}

export interface IStack {
  id: number;
  label: string;
}

export interface IStacks {
  stacks: IStack[];
}

export interface IState {
  id: number;
  value: string;
}

export interface IStates {
  states: IState[];
}

export interface IDev {
  _id: string;
  id: string;
  createdAt: Date;
  description: string;
  email: string;
  job: string;
  location: {
    lat: number;
    lng: number;
  };
  name: string;
  phone: string;
  photo: string;
  stack: {
    name: string;
    xp: string;
  }[];
  state: string;
}

export interface IDevsList {
  devsList: IDev[];
}

export interface IFavorites {
  favorites: number[];
}

export interface ILoadingData {
  loadingData: boolean;
}

export interface IInfoProcess {
  showError: boolean;
  msgError: string;
  processingAction: boolean;
}

export interface IUserProfile {
  idUser: string;
  name: string;
  photoUser: string;
  showModalPicture: boolean;
  category: string;
  userStacks: string[];
  state: string;
  description: string;
  token: string;
  email: string;
}

export interface IAppState {
  auth: {
    isLoggedIn: boolean;
    loginMethod: string;
    email: string;
    password: string;
    showPassword: boolean;
    recoveringPassword: boolean;
  };
  devs: {
    categories: ICategory[];
    stacks: IStack[];
    states: IState[];
    devsList: IDev[];
    favorites: number[];
    loadingData: boolean;
  };
  info: {
    showError: boolean;
    msgError: string;
    processingAction: boolean;
  };
  user: {
    idUser: string;
    name: string;
    photoUser: string;
    showModalPicture: boolean;
    category: string;
    userStacks: string[];
    state: string;
    description: string;
  };
}
