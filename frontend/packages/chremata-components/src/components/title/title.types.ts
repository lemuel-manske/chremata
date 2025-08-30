type Title = string;
type Subtitle = string;

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

type TitleProps = {
  value: Title;
  subtitleValue?: Subtitle;
  level?: TitleLevel;
};

export type { TitleProps, TitleLevel };
