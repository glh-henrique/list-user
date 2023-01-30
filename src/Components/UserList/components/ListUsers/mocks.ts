import {
  ResponseRepositories,
  ResponseSearchUser,
} from "../../../../Interfaces";

export const ReposMock: ResponseRepositories = {
  data: [
    {
      full_name: "glh-henrique/angular-bazel-example",
      description: "Enterprise example build&test angular with bazel",
      html_url: "https://github.com/glh-henrique",

      owner: {
        avatar_url: "https://avatars.githubusercontent.com/u/15882162?v=4",
        html_url: "https://github.com/glh-henrique",
        },
    },
  ],
};

export const UserMock: ResponseSearchUser = {
  data: {
    login: "glh-henrique",
    id: 15882162,
    location: "null",
    avatar_url: "https://avatars.githubusercontent.com/u/15882162?v=4",
    html_url: "https://github.com/glh-henrique",
    repos_url: "https://api.github.com/users/glh-henrique/repos",
  },
};
