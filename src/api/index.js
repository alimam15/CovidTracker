import axios from "axios";



const url = 'https://covid19.mathdro.id/api';

//Geting data

export const fetchData = async (country) => {
   let changeableUrl = url ;

   if(country){
      changeableUrl = `${url}/country/${country}`
   }


   try {
      const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
      return { confirmed, recovered, deaths, lastUpdate};
   } catch (error) {
      console.log(error)
      }
}


export const fetchDailyData = async () => {
   try {
      const { data } = await axios.get(`${url}/daily`);
      const modifiedData = data.map((dailyData) => (
         {
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
         }
      ));
      
      //console.log(modifiedData);
      return modifiedData;
   } catch (error) {
      }
}

export const fetchCountries = async () => {
   try {
      const {data: {countries}} = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name );
   } catch (error) {
      
   }
}