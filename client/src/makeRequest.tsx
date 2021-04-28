export async function makeRequest(url: string, method: string, body?: {}) {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        const result = await response.json();
    
        return result;
}