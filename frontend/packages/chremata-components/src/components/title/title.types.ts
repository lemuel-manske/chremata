type Title = string;
type Subtitle = string;

type TitleLevel = 1 | 2;

type TitleProps = {
  value: Title;
  subtitleValue?: Subtitle;
  level?: TitleLevel;
};

export type { TitleProps };
