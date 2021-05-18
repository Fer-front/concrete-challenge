import STATUS_CODE from '../constants/status-code'

function handleResponse(resp) {

    if (!resp) console.error('Faltou response!') 

    const responseSuccess = resp.status >= 200 &&  resp.status < 400

    return {
        data: resp.data,
        status: responseSuccess ? 'success' : 'error',
        statusText: !responseSuccess ? resp.data.message : (STATUS_CODE[resp.status] || 'Erro'),
        statusCode: resp.status,
    }
}


export default handleResponse
