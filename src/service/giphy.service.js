import baseService from './base.service';

const configDefault = {
    tokenAPI: 'zQtNRCbdJxelQuyDUFiNsb02l3z7tQb9'
};

class GiphyService {
    searchImage(params = {}){
        return baseService.get('gifs/search', params, configDefault.tokenAPI);
    }
}

export default new GiphyService();