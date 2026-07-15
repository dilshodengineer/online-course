import api from "./api";

export const createPricing = async (data) => {
    const response = await api.post("/pricings", data);
    return response.data;
};

export const getPricings = async () => {
    const response = await api.get("/pricings");
    return response.data;
};

export const getPricing = async (id) => {
    const response = await api.get(`/pricings/${id}`);
    return response.data;
};

export const updatePricing = async (id, data) => {
    const response = await api.put(`/pricings/${id}`, data);
    return response.data;
};

export const deletePricing = async (id) => {
    const response = await api.delete(`/pricings/${id}`);
    return response.data;
};