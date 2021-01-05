<template>
    <div>
        <div class="loading" v-show="isLoading">
            <van-loading size="24px" type='spinner'>加载中...</van-loading>
        </div>
        <van-card v-for="item in list" :key="item.filmId">
            <!-- 封面图片 -->
            <template #thumb>
                <img :src="item.poster" width="66" />
            </template>
            <!-- 电影名称 -->
            <template #title>
                <div class="title">
                    {{item.name}}
                    <span class="item">{{item.filmType.name}}</span>
                </div>
            </template>
            <!-- 电影的介绍 -->
            <template #desc>
                <div class="desc">
                    <div>
                        观众评分 <span class="grade">{{item.grade}}</span>
                    </div>
                    <div>主演：{{item.actors | parseActors}}</div>
                    <div>{{item.nation}} | {{item.runtime}}分钟</div>
                    <div class="nowPlayingFilm-buy">购票</div>
                </div>
            </template>
        </van-card>          
    </div>
</template>

<script>
// 导入地址模块
import uri from "@/config/uri"
import Vue from 'vue';
import { Loading, Card, Toast } from 'vant';
Vue.use(Loading);
Vue.use(Card);
Vue.use(Toast);
export default {
    data(){
        return{
            list:[],
            isLoading:true
        }
    },
    // 过滤器
    filters:{
        parseActors(actors){
            if(actors){
                var str = ''
                actors.forEach((el) => {
                    str += el.name + ' '
                })
                return str.substr(0, 13) + '...'
            } else {
                return '暂无主演'
            }
        }
    },
    created(){
        this.$http.get(uri.getNowPlaying).then((ret) => {
            if(ret.status == 0){
                console.log(ret.status)
                this.list = ret.data.films
            } else {
                Toast.fail('网络繁忙')
            }
            this.isLoading = false
        })
    }
}
</script>


<style lang='scss' scoped>
    .loading{
        text-align: center;
        padding-top: 5px;
    }
    img{
        border-radius: 0;
    }
    .title{
        font-size:16px;
        color: black;
        font-weight: 500;
    }
    .item{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
    }
    .grade{
        color: #ffb232;
        font-size: 14px;
    }
    .desc{
        font-size:13px;
        position: relative;
        color: #797d82;
    }
    .nowPlayingFilm-buy{
        float: right;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: absolute;
        border: 1px solid #ff5f16;
        top: 22%;
        right: -50%;
        bottom: -50%;
        left: 80%;
        border-radius: 4px;
    }
</style>