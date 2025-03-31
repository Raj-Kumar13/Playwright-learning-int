import { request } from "@playwright/test"

export const putHttpCall1 = async (payload: Object) => {

    const apiContext = await request.newContext()
    const response = await apiContext.put('//url', {
        ignoreHTTPSErrors: true,
        headers: {
            Authorization: 'token'
        },
        data: payload
    })
    return response;

}

export const putHttpCall = async (payload: Object) => {
    const apiContext = await request.newContext()
    const response = await apiContext.put('URL', {
        ignoreHTTPSErrors: true,
        headers: {
            Authorization: token
        },
        data: payload
    })
    return response;
}