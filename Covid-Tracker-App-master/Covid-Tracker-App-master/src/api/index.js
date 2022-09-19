import axios from 'axios'

const url = 'https://api.covid19api.com/summary'

export const FetchApi = async () => {
    try {
        const {data: {Global}} = await axios.get(url)

        const Modified = {
            // NewConfirmed: Global.NewConfirmed,
            // NewDeaths: Global.NewDeaths,
            // NewRecovered: Global.NewRecovered,
            TotalConfirmed: Global.TotalConfirmed,
            TotalDeaths: Global.TotalDeaths,
            TotalRecovered: Global.TotalRecovered
        }
        return Modified


    } catch (error) {
        
    }
}
