import { ROOT_PATH, } from 'constants/router'

export function equalByProps(obj1, obj2, props) {
    return props.every(prop => obj1[prop] === obj2[prop])
}

export function relativeToRoot(path) {
    if (!path.startsWith(ROOT_PATH)) {
        throw new Error(`path should be sub path of ${ROOT_PATH}`)
    }

    return path.slice(ROOT_PATH.length)
}

export const phoneReg = /^1[34578]\d{9}$/

export const emailReg = /^[-\w.]+@([\w-]+\.)+[a-z]{2,3}$/

export const actionCreator = type => payload => ({ type, payload, })

export const matchSidebarItem = (key, path) => path === key || path.startsWith(`${key}/`)

