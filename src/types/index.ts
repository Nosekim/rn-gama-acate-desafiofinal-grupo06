export interface IAuth {
  isLoggedIn: boolean;
  loginMethod: string;
  email: string;
  password: string;
  showPassword: boolean;
  recoveringPassword: boolean;
  apolloReady: boolean;
}

export interface IAuthState {
  auth: {
    isLoggedIn: boolean;
    loginMethod: string;
    email: string;
    password: string;
    showPassword: boolean;
    recoveringPassword: boolean;
  }
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
  favorites: string[];
}

export interface IFilter {
  stack: string;
  junior: boolean;
  middle: boolean;
  senior: boolean;
}

export interface IFilters {
  filters: IFilter[];
}

export interface IFilteredDevs {
  filteredDevs: IDev[];
}

export interface ILoadingData {
  loadingData: boolean;
}

export interface ISelectedDev {
  selectedDevId: string;
}

export interface IDevsState {
  devs: {
    categories: ICategory[];
    stacks: IStack[];
    states: IState[];
    devsList: IDev[];
    filters: IFilter[];
    filteredDevs: IDev[];
    favorites: number[];
    loadingData: boolean;
    selectedDevId: string;
  };
}

export interface IInfoProcess {
  showError: boolean;
  msgError: string;
  processingAction: boolean;
}

export interface IInfoState {
  info: {
    showError: boolean;
    msgError: string;
    processingAction: boolean;
  };
}

export interface IUserProfile {
  idUser: string;
  name: string;
  photoUser: string;
  showModalPicture: boolean;
  loadingPicture: boolean;
  category: string;
  userStacks: string[];
  state: string;
  description: string;
  token: string;
}

export interface IUserState {
  user: {
    idUser: string;
    name: string;
    photoUser: string;
    showModalPicture: boolean;
    loadingPicture: boolean;
    category: string;
    userStacks: string[];
    state: string;
    description: string;
    token: string;
  };
}
