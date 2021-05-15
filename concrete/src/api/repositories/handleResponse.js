import STATUS_CODE from '../../constants/status-code'

function handleResponse(resp) {

    if (!resp) console.error('Faltou response!') 

    const hasMsgBackEnd = Boolean(resp.statusText)

    return {
        data: resp.data,
        status: resp.status >= 200 &&  resp.status < 400 ? 'success' : 'error',
        statusText: hasMsgBackEnd ? resp.statusText : (STATUS_CODE[resp.status] || 'Erro'),
        statusCode: resp.status,
    }
}


export default handleResponse
