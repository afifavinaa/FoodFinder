import foods from './foods.js';

class DataSource {
  static searchFood(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.teams) {
          return Promise.resolve(responseJson.teams);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
