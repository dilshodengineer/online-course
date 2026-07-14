import api from "./api";

export const createPricing = async (data) => {
    const response = await api.post("/pricings", data);
    return response.data;
};

export const getPricings = async () => {
    const response = await api.get("/pricings");
    return response.data;
};