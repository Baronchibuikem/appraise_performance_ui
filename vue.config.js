module.exports = {
  "outputDir": "C:\\Users\\Baron\\Documents\\projects\\Vue\\PyJs\\public",
  "devServer": {
    "proxy": {
      "/api/v1": {
        "target": "http://localhost:5000"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}