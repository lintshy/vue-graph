import { users } from '../dataset'; //get all of the available data from our database.
const userResolvers = {
    Query: {
        getAllUsers: () => users,

        getUser: (_: any, args: any) => {
            console.log(args);

            return users.find((user) => user.id === args.id);
        },
        loginUser: (_: any, args: any) => {
            return users.find((user) => user.userName === args.userName && user.password === args.password)
        }
    },
    Mutation: {
        updateUser: (_: any, args: any) => {

            if (!args.user) {
                console.log('user object missing')
                return null
            }
            const { user } = args
            console.log(user)
            const matchingUserIdx = users.findIndex((existingUser) => {

                return existingUser.id === user?.id
            })
            if (matchingUserIdx < 0) {
                return null
            }
            console.log(matchingUserIdx)
            users[matchingUserIdx] = { ...users[matchingUserIdx], ...user }
            console.log(users)

            return users[matchingUserIdx]
        },
    }
};
export default userResolvers
