import axios from './api'

// can add more config here
const config = {
    headers: {
        'Content-Type': 'application/json',
    }
};

class BaseService {

    get(action, params = {}, token = '', addTokenToHeader = false) {
        let newConfig = { ...config };

        // maybe another APIs will be add the token into the header like JWT
        if (addTokenToHeader) {
            newConfig.headers['Authorization'] = 'Bearer' + token;
        } else {
            params['api_key'] = token;
        }
        return axios.get(action, { ...newConfig, params });
    }
}

export default new BaseService();