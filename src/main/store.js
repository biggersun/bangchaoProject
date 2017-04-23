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
    @computed getFormValue = (e, sth) => {
        this.formList[sth] = e.target.value
    }
}

const store = {
    formList: new formList({
        name: '1231',
        phoneNumbe: '',
        address: '',
        brand: '',
        mutionType: '',
        errType: '',
        qaDes: '',
    })
}
export default store