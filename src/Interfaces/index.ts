// Users Interface
export interface ResponseSearchUser {
  data: User;
  header?: any;
  status?: Number;
  url?: string;
}

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  location: string;
}

// Repositóries Interface

export interface ResponseRepositories {
  data: Repositories[];
  header?: any;
  status?: Number;
  url?: string;
}

export interface Repositories {
  description: string;
  full_name: string;
  html_url: string;

  owner: {
    avatar_url: string;
    html_url: string;
  };
}
