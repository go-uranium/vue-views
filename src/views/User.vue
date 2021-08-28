<template>
    <main>
        <div class="h-full w-full fixed justify-center items-center flex" v-if="!checkReady()">
            <rotate-square2 size="6em"/>
        </div>
        <div v-if="checkReady()">
            <div class="sticky top-0 border-b bg-white" style="z-index: 1">
                <div class="container max-w-screen-xl mx-auto flex mt-2">
                    <div class="w-1/4">
                        <transition name="fade">
                            <div class="flex h-full pl-10 py-auto items-center" v-show="showStick">
                                <div class="table-cell pr-2">
                                    <img :src="user.uid | avatarURL" class="rounded-full border" height="32" width="32">
                                </div>
                                <div class="table-cell font-black text-sm text-gray-800">
                                    {{ user.username }}
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class="w-3/4 flex text-center">
                        <div class="flex-1 py-2 border-b-2 border-blue-300">Overview</div>
                        <div class="flex-1 py-2">Posts</div>
                        <div class="flex-1 py-2">Comments</div>
                        <div class="flex-1 py-2">Likes</div>
                    </div>
                </div>
            </div>
            <div class="container max-w-screen-xl mx-auto flex">
                <div class="w-1/4 px-3 -mt-5">
                    <div class="relative flex justify-center" style="z-index: 2">
                        <img :src="user.uid | avatarURL" alt="" class="rounded-full border-2" height="280" ref="avatar"
                             width="280"/>
                    </div>
                    <div class="mt-3 px-3">
                        <div>
                            <div class="font-black text-2.5xl text-gray-800">{{ profile.name }}</div>
                            <div class="text-base text-xl text-gray-500">@{{ user.username }}</div>
                        </div>
                        <div class="mt-3 text-base text-gray-900">
                            {{ profile.bio }}
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div class="w-3/4">
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>
                    padding<br/>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import {getInfoByUsername, getProfileByUsername} from "../api/user";
    import {RotateSquare2} from 'vue-loading-spinner'

    export default {
        name: "User",
        components: {
            RotateSquare2
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        mounted() {
            const username = this.$route.params.username;
            getInfoByUsername(username).then(res => {
                this.user = res.data
            });
            getProfileByUsername(username).then(res => {
                this.profile = res.data
            })
        },
        methods: {
            handleScroll() {
                this.showStick = this.$refs.avatar.getBoundingClientRect().bottom < 0;
            },
            checkReady() {
                return this.user && this.profile
            }
        },
        props: {},
        watch: {},
        data() {
            return {
                showStick: false,
                user: null,
                profile: null
            }
        },
        filters: {
            avatarURL: (uid) => {
                if (uid == null) {
                    return null
                }
                return '/avatar/' + uid + '.jpeg'
            }
        }
    }
</script>

<style>
    .spinner:after {
        background: #60A5FA !important;
    }
</style>