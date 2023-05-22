import axios from "axios";

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(
            `${BASE_URL}tv/popular${API_KEY_PARAM}`
        );
        console.log(response.data.results);
        return response.data.results;
    }
}
