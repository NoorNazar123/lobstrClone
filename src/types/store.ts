// import { CrawlerType } from "./crawler";

export interface HeroProps {
  term?: string;
  setTerm: (term: string) => void | undefined;
  handleSearch?: any;
}
export interface ToolsProps {
  tools: any;
  filteredCrawlers: any;
  clearFilteredCrawlers: any;
}
export interface Feature {
  description: string;
  image: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    }; // Adjust this type according to the actual structure of the `image.data` object
  };
  title: string;
  id: number;
}

export interface Benefits {
  description: string;
  title: string;
  image: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
  };
}

export interface SectionsProps {
  containsPathname: boolean;
  planData: any;
  attr: {
    value_title: string;
    value_subtitle: string;
    result: string;
    action: string;
    cta_title: string;
    internal_id: string;
    functions: any;
    benefits: Benefits[];
    speed: number;
    color: string;
    title: string;
    name: string;
    is_premium: boolean;
    has_issues: boolean;
    is_new: boolean;
    slug: string;
    json: any;
    stats: {
      total_users: string;
      total_runs: string;
    };
    features: Feature[];
    icon: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    hero_image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    video: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    faq: {
      question: string;
      response: string;
    }[];
    articles: {
      data: [
        {
          id: number;
          attributes: {
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
            slug: string;
            title: string;
            description: string;
            updatedAt: string;
            publishedAt: string;
            content: string;
          };
        }
      ];
    };
    related_articles: {
      data: [
        {
          id: number;
          attributes: {
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
            slug: string;
            title: string;
            readingTime: number;
            description: string;
            updatedAt: string;
            publishedAt: string;
            content: string;
          };
        }
      ];
    };
    how_to: [
      {
        illustrationTitle: string;
        illustrationSubtitle: string;
        illustrationImage: {
          data: [
            {
              attributes: {
                url: string;
                alternativeText: string;
              };
            }
          ];
        };
      }
    ];
    limitations: string;
    related_crawlers: {
      //   data: CrawlerType[];
    };
  };
}
export interface FilterProps {
  labels: { domain: string; status: boolean }[];
  selectCrawler: (index: number) => void;
  selectCategory: (index: number) => void;
  filterOnPrice: (term: string) => void;
  setShowMediaFilter: () => void;
  clearFiltering: () => void;
  priceFilter: string;
  subCategories: string[];
  categoriesChecked: string[];
  dataPoints: any;
  selectDataPoints: any;
  dataPointChecked: any;
}
export interface ProductsProps {
  clearFiltering: () => void;
  crawlersList: any;
  setShowMediaFilter: () => void;
  toolsFiltered: boolean;
}
export interface Tool {
  attributes: {
    stats: {
      total_users: number;
    };
  };
}
