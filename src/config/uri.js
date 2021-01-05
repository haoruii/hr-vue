let prefix = '/api'
export default {
    // 城市信息
    getCities:prefix + '/getCitiesInfo',
    // 正在热映
    getNowPlaying:prefix + '/getNowPlayingFilmList',
    //获取即将上映
    getComingSoon: prefix + '/getComingSoonFilmList'
}