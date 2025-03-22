import { Key, ReactNode } from "react";
import type { JSX } from "react";

export interface BrandsProps {
  bg: boolean;
  isColored: boolean;
  title?: any;
}

export interface ReviewType {
  link: string;
  name: string;
  position?: string;
  img: JSX.Element;
  source: JSX.Element;
  date: string;
  desc: JSX.Element;
  itemCount: number;
}

export interface FaqProps {
  questions: {
    question: string;
    response: string;
  }[];
}

export interface ButtonPrimaryArrowProps {
  name: string;
  link?: string;
  outline: boolean;
  linkType?: boolean;
  hoverState?: boolean;
  width?: string;
  height?: string;
  iconWidth?: number;
  iconX?: number;
  handleClick?: any;
  isOuterLink?: boolean;
}

export interface ButtonPrimaryProps {
  name: string;
  link: string;
  target?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

export interface ButtonGreenProps {
  name: string;
  link: string;
  target?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}
export interface ButtonSecondaryProps {
  name: string;
  link: string;
  target: string;
}
export interface ButtonSecondaryArrowProps {
  name: string;
  link: string;
  outline: boolean;
  hoverState: boolean;
  width: string;
  height: string;
}

export interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  hideBelowWidth?: number;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
}
export interface MetaProps {
  author?: string;
  readTime?: number;
  title: string;
  description?: string;
  date?: string;
  url?: string;
  image?: string;
  type?: string;
  schema?: any;
}
export interface ArticleProps {
  article: {
    id: number;
    attributes: {
      categories?: {
        data: [
          {
            attributes: {
              slug: string;
              nameEN: string;
              nameFR?: string;
            };
          }
        ];
      };
      slug: string;
      title: string;
      description?: string;
      updatedAt?: string;
      first_published_at?: string;
      readingTime: number;
      content: string;
      publishedAt?: string;
      is_product_update?: boolean;
    };
  };
  lang?: string;
  maxWidth: boolean;
}

export interface datasetProps {
  title: string;
  slug: string;
  icon: any;
  onChange: (slug: string) => void;
  iconHover: any;
  active: boolean;
}
export interface SolutionsProp {
  item: {
    img: any;
    title: string;
    desc: string;
  };
}
export interface QuestionProps {
  mania: {
    question: string;
    response: string;
  };
}
export interface TooltipProps {
  title: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  customStyle?: any;
  def?: any;
}
export interface ContentProps {
  lang: string | undefined;
  attr: {
    content: string;
    description: string;
    author: {
      data: {
        attributes: {
          name: string;
          description: string;
          descriptionFR: string;
          twitter: string;
          avatar: {
            data: {
              attributes: {
                alternativeText: string;
                url: string;
              };
            };
          };
        };
      };
    };
    categories: {
      data: [
        {
          attributes: {
            slug: string;
            nameEN: string;
          };
        }
      ];
    };
  };
  isDataCall?: boolean;
}
export interface HeroArticleProps {
  attr: {
    localizations: any;
    publishedAt: string;
    first_published_at: string;
    update_published_at: string;
    readingTime: number;
    is_updated: any;
    title: string;
    slug: string;
    content: string;
    cover: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    author: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
  };
  isImage: boolean;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface CategoryProps {
  lang: string;
  parent: {
    id: Key;
    attributes: {
      slug: string;
      nameEN: string;
      nameFR: string;
      children: {
        data: any[];
      };
    };
  };
}
export interface DocProps {
  content: string;
}
export interface ContentLegalProps {
  content: any;
}

export interface TOCProps {
  headings: {
    depth: number;
    text: string;
  }[];
}

export interface CitationProps {
  children: React.ReactNode;
}
export interface CodeBlockProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children: any;
}
export interface GTMWrapperProps {
  gtmId: string;
}
export interface TableProps {
  rowData: any[];
}

export interface LazyLoadBackgroundImageProps {
  imageUrl: string;
  fallbackUrl?: string;
  x: string | number;
  y: string | number;
  h: string | number;
  w: string | number;
  children?: ReactNode;
}
export interface ModalProps {
  handleClose: () => void;
  modalState: boolean;
  title: string;
  component: React.ReactNode;
  flag?: boolean;
}
export interface usePaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

export interface Heading {
  text: string;
  depth: number;
}
export interface TOCProps {
  isLegal: boolean;
  headings: Heading[];
}
export interface ToggleProps {
  isToggled: boolean;
  onToggle: () => void;
}
export interface RootLayoutProps {
  children: React.ReactNode;
}
