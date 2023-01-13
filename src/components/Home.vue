<template>
    <Header />
    <h1>Hello,{{ firstName }} welcome to home page</h1>
</template>
<script>
import Header from './Header.vue';
export default {
    name: 'Home',
    components:{
    Header
    },
    // created() {
    //     const user = localStorage.getItem('user-register>','user-login>');
    //     if (!user) {
    //         this.$router.push({ name: 'LogIn' });
    //     }
    // }
}
</script>