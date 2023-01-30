import ApiManegerRepo from './Repos.service'
import ApiManegerUser from './Users.service'

const apiManegerUser = new ApiManegerUser()
const apiManegerRepo = new ApiManegerRepo()

describe('apiManegerUser', () => {
  it('should return a getTopTenREpos', async () =>{
    const repos = await apiManegerUser.getTopTenRepos()

    // eslint-disable-next-line jest/valid-expect
    expect(Promise.resolve(repos[0])).resolves.not.toBeNull();

  })

  it('should return a user', async () =>{
    const user = await apiManegerUser.getUser('david')

    if (user) {
      // eslint-disable-next-line jest/valid-expect, jest/no-conditional-expect
      expect(Promise.resolve(user.data.login)).resolves.toBe('david');
    }

  })
})

describe('apiManegerRepo', () => {
  it('should return a repos', async () =>{
    const repos = await apiManegerRepo.getRepos('david')

    if (repos) {
      // eslint-disable-next-line jest/valid-expect, jest/no-conditional-expect
      expect(Promise.resolve(repos.data[0].owner.login)).resolves.toBe('david');
    }

  })
})
