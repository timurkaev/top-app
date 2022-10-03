export interface MenuItem {
  _id: Id;
  pages: PageItem[];
}

export interface Id {
  secondCategory: string;
}

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}
