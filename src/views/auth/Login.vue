<template>
    <main>
        <div class="h-full w-full fixed justify-center flex">
            <div class="box pb-16">
                <div>
                    <h2 class="mt-16 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                        Or
                        <router-link :to="{name:'SignUp'}" class="font-medium text-blue-600 hover:text-blue-500">
                            create a new account
                        </router-link>
                    </p>
                </div>
                <div>
                    <sweet-modal icon="success" ref="success">
                        <div class="text-xl text-gray-700">Success!</div>
                        <div class="text-sm text-gray-600">Redirecting to home...</div>
                    </sweet-modal>
                </div>
                <div class="mt-5">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div :key="'use-email'" v-if="isEmail">
                            <label class="sr-only" for="email">Email address</label>
                            <input autocomplete="email"
                                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                   id="email" name="email" placeholder="Email address"
                                   type="email"
                                   v-model.trim="email">
                        </div>
                        <div :key="'use-username'" v-if="!isEmail">
                            <label class="sr-only" for="username">Username</label>
                            <input class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                   id="username" name="username" placeholder="Username"
                                   type="text"
                                   v-model.trim="username">
                        </div>
                        <div>
                            <label class="sr-only" for="password">Password</label>
                            <input autocomplete="current-password"
                                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                   id="password" name="password"
                                   placeholder="Password"
                                   required
                                   type="password"
                                   v-model="password">
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center">
                        <input class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                               id="remember-me" name="remember-me" type="checkbox"
                               v-model="remember">
                        <label class="ml-2 block text-sm text-gray-900" for="remember-me">
                            Remember
                        </label>
                    </div>

                    <div class="text-sm">
                        <a class="font-medium text-blue-600 hover:text-blue-500" href="#">
                            Forgot?
                        </a> |
                        <a @click.prevent="isEmail=!isEmail" class="font-medium text-blue-600 hover:text-blue-500"
                           href="#">
                            Use username
                        </a>
                    </div>
                </div>
                <div class="mt-5">
                    <button :disabled='loginDisabled' @click.prevent="login"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            type="submit">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg aria-hidden="true" class="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              fill-rule="evenodd"/>
                    </svg>
                    </span>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import client from '/src/utils/client'
    import {SweetModal} from 'sweet-modal-vue'

    export default {
        name: "Login",
        components: {
            SweetModal
        },
        mounted() {

        },
        data() {
            return {
                isEmail: true,
                email: "",
                username: "",
                password: "",
                remember: false,
                loginDisabled: false
            }
        },
        methods: {
            login: function () {
                this.loginDisabled = true;
                client.post('/user/login', {
                    'username': this.isEmail ? this.email : this.username,
                    'password': btoa(this.password),
                    'is_email': this.isEmail,
                    'remember': this.remember,
                    'recaptcha': '',
                }).then(res => {
                    if (res.data.success) {
                        this.$refs.success.open();
                        const vm = this;
                        setTimeout(function () {
                            if (window.history.length > 2) {
                                vm.$router.go(-1)
                            } else {
                                vm.$router.push({name: 'Home'})
                            }
                        }, 1000)
                    }
                }).catch(err => {
                    if (err.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(err.response.data);
                        console.log(err.response.status);
                        console.log(err.response.headers);
                    } else if (err.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(err.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', err.message);
                    }
                    console.log(err.config);
                    this.loginDisabled = false
                })
            }
        }
    }
</script>

<style scoped>

</style>