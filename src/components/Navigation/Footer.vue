<template>
    <div>
        <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000"
        @change="changeItem"
        >
        <van-tabbar-item>
            <van-icon class-prefix='iconfont icon-dianying' slot='icon' size='1.2rem'/>
            <span>电影</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon class-prefix='iconfont icon-yingyuan' slot='icon' size='1.2rem'/>
            <span>影院</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon class-prefix='iconfont icon-wode3' slot='icon' size='1.2rem'/>
            <span>我的</span>
        </van-tabbar-item>
        
        
</van-tabbar>
    </div>
</template> 

<script>
// 导入字体样式文件
import '@/assets/font/iconfont.css'
// 导入vant组件
import Vue from 'vue';
import { Tabbar, TabbarItem, Icon} from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);

export default {
    data(){
        return{
            active:0,
            // 定义底部
            urls:['/films/nowPlaying','/cinemas','center']
        }
    },
    created(){
        //纠正刷新归零的情况
        this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0 
    },
    methods:{
        // 点击菜单的页面处理程序
        changeItem(index){
            // 编程式
            this.$router.push(this.urls[index])
        }
    }
}
</script>