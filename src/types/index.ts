export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  homepage: string | null;
  language: string | null;
  languages_url: string;
  languages?: Record<string, number>;
}
