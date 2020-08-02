export interface IProps {
  state?: IState;
}

export interface ILoadable {
  isLoading: boolean;
  error?: string;
}

export interface IState extends ILoadable {
  title?: string;
  lists?: IList[];
}

export interface IList {
  Id: string;
  Title: string;
}