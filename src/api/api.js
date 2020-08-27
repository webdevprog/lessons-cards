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
    },
    getDataForFrom() {
        return krapiplAPI.post(`mobilev1/update/`, { data: '' }).then(response => {
            if (response.data.errorMessage === null) {

                let selects = {
                    genres: [],
                    subjects: []
                }

                response.data.items.forEach(item => {
                    if (!selects.genres.includes(item.genre)) {
                        selects.genres.push(item.genre)
                    }
                    if (!selects.subjects.includes(item.subject)) {
                        selects.subjects.push(item.subject)
                    }
                });

                return selects;
            }
        });
    }
}