<template>
    <Header />
    <h1>Welcome to Update user page</h1>
    <div class="container">
        <div class="form-group">
            <label for="name">Name: </label>
            <input type="text" id="name" placeholder="name here" v-model="name">
        </div>
        <div class="form-group">
            <label for="email">Email: </label>
            <input type="text" id="email" placeholder="email" v-model="email">
        </div>
        <div class="form-group">
            <label for="password">Password: </label>
            <input type="text" id="password" placeholder="password" v-model="password">
        </div>
        <button v-on:click="updateUser">Update User</button>

    </div>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'UpdateDetails',
    components: {
        Header
    },
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        updateUser(){
            console.warn('Upadted user>',this.name, this.email, this.password);
        }
    }
}
</script>   