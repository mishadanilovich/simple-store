interface IParams {
  slug: string;
}

export interface IProps {
  params: Promise<IParams>;
}
