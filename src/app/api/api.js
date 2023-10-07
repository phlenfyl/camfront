const API_BASE_URL = 'http://127.0.0.1:8000';


export async function getSermon(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { next: { revalidate: 10 } });
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
}

export async function getSlider(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { next: { revalidate: 10 } });
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
}

export async function getMain(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { next: { revalidate: 10 } });
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
}
// export async function apiFetch(endpoint) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, { next: { revalidate: 10 } });
//     if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//     }

//     return response.json();
// }