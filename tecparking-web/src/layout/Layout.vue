<template>
     <tiny-layout class="tecParking-layout">
        <template #header v-show="false">
            <button>No hago nada</button>
        </template>
        <template #nav>
            <header class="img-space">ite parking</header>
            <ul class="menu">
                <li class="menu__item" @click="$router.push({name: 'Home'})">
                    <div class="select">
                        <img src="../assets/img/icons/home.svg">
                    </div>
                </li>
                <li class="menu__item">
                    <div class="select">
                        <img src="../assets/img/icons/professor.svg">
                    </div>                
                </li>
                <li class="menu__item">
                    <div class="select">
                        <img src="../assets/img/icons/students.svg">
                    </div>
                </li>
                <li class="menu__new-user">
                    <div class="select">
                        <img src="../assets/img/icons/new-user.svg">
                    </div>
                </li>
            </ul>
        </template>
        <template>
            <router-view/>
        </template>
        <template #footer>

        </template>
    </tiny-layout>
</template>

<script>
import TinyLayout from './TinyLayout';
//import api from '../service/api';


export default {
    name: 'Layout',
    components: { TinyLayout },
    methods: {
        currentRoute(path) {
            return this.$route.path.includes(path);
        },
        currentComponentName(name) {
            return this.$route.name.includes(name);
        },
    }    
}
</script>
<style lang="scss">
.tecParking-layout {
    .layout__nav {
        .img-space {
            height: 30px;
            width: 100%;
            //background-color: #245C4F;
            color: #DBDBDB;
}
        .menu {
            &__item {
                display: block;
                width: 100%;
                height: 84px;
                text-align: left;
                color: white;
                cursor: pointer;
                .select {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    img {
                        height: 30px;
                    }
                }
            }
            &__new-user {
                display: block;
                width: 100%;
                height: 84px;
                text-align: center; 
                color: white;
                cursor: pointer;
                .select {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    img {
                        height: 30px;
                    }
                }
            }
        }
    }
}
</style>