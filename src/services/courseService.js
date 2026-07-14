import api from "./api";

export const createCourse = (formData) => {
    return api.post("/courses", formData);
};

export const getCourses = () => {
    return api.get("/courses");
};

export const getCourse = (id) => {
    return api.get(`/courses/${id}`);
};

export const updateCourse = (id, formData) => {
    return api.put(`/courses/${id}`, formData);
};

export const deleteCourse = (id) => {
    return api.delete(`/courses/${id}`);
};