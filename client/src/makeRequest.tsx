export async function makeRequest<T = string>(url: string, method: string, body?: {}): Promise<[T, boolean]> {
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return [
        data,
        response.ok
    ];
}