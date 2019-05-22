import apisauce from 'apisauce';
import history from './history';

const REDIRECT_CODES = [7, 8];
const REDIRECT_STATUSES = [429];

const create = (baseURL) => { // home
    const api = apisauce.create({
        baseURL,
        headers: {
            Accept: 'application/json',
        }
    });
    api.addAsyncRequestTransform(request => async () => {
        const accessToken = JSON.parse(localStorage.getItem('access_token'));
        if (accessToken) {
            request.headers['x-access-token'] = accessToken;
        }
    });

    api.addMonitor(response => {
        if (!response.ok) {
            /*for (let i in REDIRECT_STATUSES) {
                if (response.status === REDIRECT_STATUSES[i]) {
                    localStorage.clear();
                    history.push('/login');
                    break;
                }
                if (response.status === 403) {
                    for (let j in REDIRECT_CODES) {
                        if (response.data.code === REDIRECT_CODES[j]) {
                            localStorage.clear();
                            history.push('/login');
                            break;
                        }
                    }
                }
            }*/
        }
    });

    if (true) {
        api.addMonitor(response => console.log('response: ', response));
    }

    // TODO - Add error parser to transform into an specific error api
    /** Conection Login API */
    /**
     *
     * @param string email
     * @param string password
     */
    const doLogin = (email, password) => {
        return api.post('/access-token', { email, password });
    };

    /**
     *
     * @param string token
     */
    const logout = (token) => {
        return api.delete(`/access-token/${token}`);
    };

    /**
     *
     * @param string token
     */
    const checkAuth = (token) => {
        return api.get(`/access-token/${token}`);
    };

    /** Conection User API */
    /**
     * Creates an user
     * @param object user
     * @returns Promise
     */
    const postUserCollection = (user) => {
        return api.post('/user', user);
    };

    /**
     * Update an user
     * @param int    uuid  User id
     * @param Object user    User object
     * @returns Promise
     */
    const patchUserResource = (uuid, user) => {
        return api.patch(`/user/${uuid}`, user);
    };

    /**
     * Delete an user
     * @param int    uuid  User id
     * @returns Promise
     */
    const deleteUserResource = (uuid) => {
        return api.delete(`/user/${uuid}`);
    };

    /**
     * Get users
     * @returns Promise
     */
    const getUserCollection = (query) => {
        return api.get(`/user`, query);
    };

    /**
     * Get an user
     * @param int    uuid  User uuid
     * @returns Promise
     */
    const getUserResource = (uuid) => {
        return api.get(`/user/${uuid}`);
    };

    return {
        // Auth endpoint calls
        doLogin,
        logout,
        checkAuth,
        // User endpoint calls
        postUserCollection,
        patchUserResource,
        deleteUserResource,
        getUserCollection,
        getUserResource
    };
};

export default {
    create
}
