import { octokit } from "../octokit.config";

export class RepoService {
  static myInstance = null;

  static getInstance() {
    return new RepoService();
  }

  async getFetchedUsers({
    searchedUser,
    itensPerPage,
    currentPage,
  }: {
    searchedUser: string;
    itensPerPage: number;
    currentPage: number;
  }) {
    try {
      const response = await octokit.request(
        "GET /search/users{?q,per_page,page}",
        {
          q: searchedUser,
          per_page: itensPerPage,
          page: currentPage,
        }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getRepos(userName: string | undefined) {
    if(!userName) return ;

    try {
      const response = await octokit.request('GET /users/{username}/repos', {
        username: userName
      })
      
      return response;
    } catch (error) {
      console.error(error);
    }
  }

}
export default RepoService;
