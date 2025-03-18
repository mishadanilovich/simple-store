interface ISearchParams {
  callbackUrl: string;
}

export interface IProps {
  searchParams: Promise<ISearchParams>;
}
