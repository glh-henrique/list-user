import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: "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" || process.env.REACT_APP_GITHUB_TOKEN
})