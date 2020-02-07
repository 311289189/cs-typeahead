const apiFetch = <T extends unknown>(url: string, options: RequestInit = {}): Promise<{ json: T, data: Response }> => fetch(url, options).then(data => {
    const contentType = data.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
        switch (data.status) {
            case 200:
            default:
                return data.json().then(json => ({
                    json,
                    data
                }))
        }
    } else {
        throw new Error(`unsupported Content-Type: ${contentType}`)
    }
})

export default apiFetch
