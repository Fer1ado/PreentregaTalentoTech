
const input = process.argv.map(item => item.toUpperCase()).splice(2)

const [method, route, ...params] = input

const [product, id=""] = route.split('/').filter(Boolean)

const URL = 'https://fakestoreapi.com'

const payload = params.length > 0 ? { product: params[0], price: params[1], description: params[2], image: params[3], category: params[4] } : null

console.log('\x1b[31mREQUEST STARTED\x1b[0m')
console.log('Method:', method)
console.log('Products:', product)
console.log('Params:', params)
console.log('ID:', id)
console.log('URL:', URL)
console.log('Payload:', payload)
console.log('\x1b[31m-------------------------------------\x1b[0m')



const makeRequest = async (URL, method, product, id, payload) => {

    try {
    if(method === 'GET' && !id) {
    console.log(`\x1b[94mSOLICITANDO LISTADO DE PRODUCTOS COMPLETO A ${URL}\x1b[0m`)
    const response = await fetch(`${URL}/${product}`)
    return response.json()
    } 
    else if(method === 'GET' && id) {
    console.log(`\x1b[94mBUSCANDO PRODUCTO POR ID NRO ${id}\x1b[0m`)
    const response = await fetch(`${URL}/${product}/${id}`)
    return response.json()
    } 
    else if(method === 'POST' && payload) {
    const req = { method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)}
    const response = await fetch(`${URL}/${product}`, req)
    console.log(`\x1b[92m CREADO NUEVO RECURSO EN ${URL} \x1b[0m`)
    console.log(`\x1b[92m Status: ${response.status} StatusText: ${response.statusText}\x1b[0m`)
    return response.json()
    }
    else if(method === 'DELETE' && id) {
    const req = { method: 'DELETE' }
    const response = await fetch(`${URL}/${product}/${id}`, req)    
    return response.json()
    }

} catch (error) {
    throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`)   
} 
     
}

if (method === 'GET') {
            if (id) {
                console.log(`\x1b[94mBuscando ${product} con ID ${id}  ...\x1b[0m`)
                const data  = await makeRequest(URL, method, product, id)
                        if(!data) {
                            console.log(`\x1b[31mNo se encontró ${product} con ID ${id}.\x1b[0m`)
                        }else {
                            console.log(data)
                        }   
            } else {
                console.log(`\x1b[94mBuscando todos los ${product}  ...\x1b[0m`)
                const data = await makeRequest(URL, method, product)
                console.log(data)
            }


} else if (method === 'POST') {
           if (params.length === 0) {
                console.log(`\x1b[31mNo se puede crear ${product} sin datos.\x1b[0m`)
            } else if (params.length < 3) {
                console.log(`\x1b[31mSe necesitan al menos 3 parámetros para crear un ${product}.\x1b[0m`)
            } else {
                console.log(`\x1b[94mCreando ${product} con los siguientes datos: ${params}\x1b[0m`)
                 const data = await makeRequest(URL, method, product, id, payload)
                 console.log(data)
            }


} else if (method === "DELETE") {
            if (id) {
                console.log(`\x1b[94mEliminando ${product} con ID ${id}  ...\x1b[0m`)
                const data = await makeRequest(URL, method, product, id)
                console.log(data)
                console.log(`\x1b[31m PRODUCTO con ID ${id} eliminado correctamente.\x1b[0m`)
            }
} else {
                console.log(`\x1b[31mNo se puede eliminar ${product} sin un ID.\x1b[0m`)
            }
        







