<template>
    <main>
        <div class="sticky top-0 border-b bg-white" style="z-index: 1">
            <div class="container max-w-screen-xl mx-auto flex mt-2">
                <div class="w-1/4">
                    <div class="flex h-full pl-10 py-auto items-center" v-show="showStick">
                        <div class="table-cell pr-2">
                            <img class="rounded-full border" height="32" src="/avatar.jpeg" width="32">
                        </div>
                        <div class="table-cell font-black text-sm text-gray-800">
                            iochen
                        </div>
                    </div>
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
                    <img alt="" class="rounded-full border-2" height="280" ref="avatar" src="/avatar.jpeg" width="280"/>
                </div>
                <div class="mt-3 px-3">
                    <div>
                        <div class="font-black text-2.5xl text-gray-800">Richard Chen</div>
                        <div class="text-base text-xl text-gray-500">@iochen</div>
                    </div>
                    <div class="mt-3 text-base text-gray-900">
                        What is mind? No matter. What is matter? Never mind.
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
    </main>
</template>

<script>
    export default {
        name: "User",
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                this.showStick = this.$refs.avatar.getBoundingClientRect().bottom < 0;
            }
        },
        data() {
            return {
                showStick: false
            }
        }
    }
</script>
