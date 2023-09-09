import request from "@/api/request";


type LoginParams = {
    name: string;
    password: string;
}

export function loginApi(data: LoginParams) {
    return request({
        url: '/api/login',
        method: 'post',
        data
    })
}


export function getUserListApi(data:any) {
    return request({
        url: '/api/user/list',
        method: 'post',
        data
    })
}