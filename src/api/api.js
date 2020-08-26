import * as axios from "axios";

const krapiplAPI = axios.create({
    baseURL: 'http://krapipl.imumk.ru:8082/api/'
});

export const coursesAPI = {
    getCourses() {
        return krapiplAPI.post(`mobilev1/update/`, { data: '' }).then(response => {
            if (response.data.errorMessage === null) {
                return response.data.items;
            }
        });
    }
}