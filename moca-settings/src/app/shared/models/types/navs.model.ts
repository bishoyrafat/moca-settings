export type NavLinksModel = {
  id: number;
  linkName: string;
  active:boolean
  mainParent: MainParentModel[];
};

export type MainParentModel = {
  name: string;
  parent?: ParentModel[];
};

type ParentModel = {
  name: string;
  route?: string;
  children?: childrenModel[];
};

type childrenModel = {
  name: string;
  route: string;
};
