import { octokit } from "../octokit.config";

export class RepoService {
  static myInstance = null;

  static getInstance() {
    return new RepoService();
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
