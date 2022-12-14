class DataSource {
  static searchFood(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`)
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
