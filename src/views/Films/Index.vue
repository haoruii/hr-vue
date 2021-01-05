<template>
    <div>
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
// 导入顶部导航
import Header from '@/components/Navigation/header'
export default {
    //注册组件
    components:{
        Header,
    },
}
</script>