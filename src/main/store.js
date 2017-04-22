import { observable, computed } from 'mobx'

class formList {
    @observable formList = {
        name: '',
        phoneNumbe: '',
        address: '',
        brand: '',
        mutionType: '',
        errType: '',
        qaDes: '',
    }
    constructor(formList) {
        this.formList = formList;
    }
}

const store = {
    formList
}
export default store