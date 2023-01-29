import { octokit } from "../octokit.config";

export class UserService {
  static myInstance = null;

  static getInstance() {
    return new UserService();
  }

  async getTopTenRepos() {
    try {
      const response = await octokit.request(
        "GET /search/repositories{?q,sort}",
        {
          q: "stars:>1",
          sort: "stars",
          per_page: "10"
        }
      );
      return await response.data.items;
    } catch (error) {
      console.error(error);
    }
  }

  async getUser(userName: string) {
    try {
      const response = await octokit.request('GET /users/{username}', {
        username: userName
      })
      
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
export default UserService;
