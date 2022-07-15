

class Authentication {

    isLoggedIn = () => {
        return window.localStorage.getItem('currentUser') !== null
    }

    getCurrentUser = () => {
        return window.localStorage.getItem('currentUser')
    }

    login = (user: string, redirectTo?: string) => {
        window.localStorage.clear()
        window.localStorage.setItem('currentUser', user)
        //@ts-ignore
        window.location = redirectTo ?? '/'
    }

    logout = () => {
        window.localStorage.removeItem('currentUser')
        window.location.reload()
    }

}







export const authentication = new Authentication()