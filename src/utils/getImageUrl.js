export const getImageUrl = (path) => {
    if (!path) return "";

    const baseUrl = import.meta.env.VITE_API_URL.replace("/api", "");

    return `${baseUrl}/storage/${path}`;
};