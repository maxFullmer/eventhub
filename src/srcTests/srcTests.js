module.exports = {
    capitalizer(city) {
        let capitalize = city.toLowerCase().split(' ')
        .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
        .join(' ');
        return capitalize
    },

    loadingCheck(loadingState) {
        return loadingState;
    }
}