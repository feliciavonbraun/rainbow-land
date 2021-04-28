export async function makeRequest<T = undefined>(url: string, method: string, body?: {}): Promise<[T, boolean]> {
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    console.log(data)
    return [
        data,
        response.ok
    ];
}