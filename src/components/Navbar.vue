<template>
<div>
    <nav class='navbar'>
        <div class="navbar-cont">
            <div class='navbar-logo'>
                <img @click="closeMobile(),goToHome()" :src="logo" alt="payapi" />
            </div>
            <div class="menu-icon">
                <button class="nav-btn" @click="handleClick()">
                    <span key="bars" v-if="!click"> <i class="fas fa-bars"></i></span>
                    <span key="cross" v-else><i class="fas fa-times"></i></span>
                </button>
            </div>
            <ul :class="click?'nav-menu active':'nav-menu' ">
                <li class="nav-item">
                    <router-link class="nav-links" :active-link="active" to="/pricing" @click.native="$scrollToTop">
                        <button class="nav-btn" @click="closeMobile()"> Pricing</button>
                    </router-link>

                </li>
                <li class=" nav-item">
                    <router-link class="nav-links" @click="closeMobile()" :active-link="active" to="/about" @click.native="$scrollToTop">
                        <button class="nav-btn" @click="closeMobile()"> About</button>
                    </router-link>
                </li>
                <li class=" nav-item">
                    <router-link class="nav-links" @click="closeMobile()" :active-link="active" to="/contact" @click.native="$scrollToTop">
                        <button class="nav-btn" @click="closeMobile()"> Contact </button>
                    </router-link>
                </li>
                <button class='pink-btn'> Schedule a Demo</button>
            </ul>

        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            logo: require('@/assets/images/shared/desktop/logo.svg'),
            click: false
        }

    },
    methods: {
        closeMobile() {
            this.click = false;
        },
        handleClick() {

            this.click = !this.click;

        },

        goToHome() {
            this.$router.push('/home');
        },

        scrollToTop() {
            window.scrollTo(0, 0);
        }

    }
}
</script>

<style scoped>
.nav-btn {
    position: relative;
    top: -10px;
    width: 150px;
    border: none;
    background: transparent;
}

.navbar {
    margin-top: 0px;
    height: 80px;

    justify-content: start;
    align-items: center;
    font-size: 15px;
}

.navbar .navbar-cont {
    display: flex;
    justify-content: start !important;
    height: 80px;
    align-items: baseline;
    max-width: 1700px;
    margin-left: 10vw;

}

.navbar .navbar-cont .navbar-logo {
    text-align: start !important;

    margin-top: 20px;
    cursor: pointer;
    align-items: center;
}

.navbar .navbar-cont .navbar-logo img {
    align-self: start !important;
    height: 40px;
}

@media screen and (max-width: 756px) {
    .navbar .navbar-cont .navbar-logo {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(30%, 0);
    }
}

.navbar .navbar-cont .menu-icon {
    display: none;
}

@media screen and (max-width: 756px) {
    .navbar .navbar-cont .menu-icon {
        display: block;
        position: absolute;
        top: 30px;
        right: 10px;
        font-size: 1.8rem;
        z-index: 2 !important;
        cursor: pointer;
    }
}

.navbar .navbar-cont .menu-icon .fa-bars,
.navbar .navbar-cont .menu-icon .fa-times {
    color: #1b262f;
}

.navbar .navbar-cont .menu-icon .fa-times {
    margin-top: 20px;
    color: #fbfcfe;
}

.navbar .navbar-cont .nav-menu {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 35px;
    list-style: none;
    text-align: center;
    justify-content: start;
    margin-left: 80px;
    align-items: center;
}

.navbar .navbar-cont .nav-menu .nav-links .nav-btn {
    font-size: 16px;
    color: #6c8294 !important;
    position: relative;
    top: 3px;
}

@media screen and (max-width: 756px) {
    .navbar .navbar-cont .nav-menu {
        display: flex;
        flex-direction: column;
        padding-top: 7%;
        width: 80%;
        height: 100%;
        position: absolute;
        left: 100%;
        opacity: 0;
        transition: all 0.5s ease;
    }

    .navbar .navbar-cont .nav-menu.active .nav-links.router-link-active .nav-btn {
        color: white !important;
    }

    .navbar .navbar-cont .nav-menu.active {
        background-color: #1b262f;
        left: 2%;
        opacity: 1;
        transition: all 0.5s ease;
        height: 900px;
        z-index: 1;

    }

    .navbar .navbar-cont .nav-menu.active .nav-links .nav-btn {
        font-size: 22px;
        color: #6c8294 !important;

        margin-left: 30%;
    }

    .navbar .navbar-cont .nav-menu.active .nav-item {
        width: 380px;
        height: 50px;

    }

    .navbar .navbar-cont .nav-menu.active .nav-links .nav-btn:hover {
        cursor: pointer;
        color: #fbfcfe !important;
    }

    .navbar .navbar-cont .nav-menu.active li:first-child {
        margin-top: 70px;
    }
}

@media screen and (min-width: 500px) and (max-width: 750px) {
    .navbar .navbar-cont .nav-menu.active {
        background-color: #1b262f;
        left: 10% !important;
        opacity: 1;
        transition: all 0.5s ease;
        height: 900px;
        z-index: 1;

    }
}

.navbar .navbar-cont .nav-menu .nav-links {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #6c8294;
    font-family: "Public Sans", sans-serif;
}

.navbar .navbar-cont .nav-menu .nav-links.router-link-active .nav-btn {
    color: #1b262f !important;
}

.navbar .navbar-cont .nav-menu .nav-links:hover {
    transition: all 0.2s ease-out;
    color: #1b262f;
}

.navbar .navbar-cont .nav-menu .nav-links-mobile {
    display: none;
}

.navbar .navbar-cont .nav-menu .nav-links .nav-item:hover {
    cursor: pointer;
}

.navbar .navbar-cont .nav-menu .pink-btn {
    height: 50px;
    width: 150px;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid #ba4270;
    background-color: #ba4270;
    color: #fbfcfe;
}

@media screen and (min-width: 756px) {
    .navbar .navbar-cont .nav-menu .pink-btn {
        position: absolute;
        right: 80px;
        top: 20px;
    }
}

@media screen and (max-width: 756px) {
    .navbar .navbar-cont .nav-menu .pink-btn {
        width: 80%;
        font-size: 16px;
    }
}

.navbar .navbar-cont .nav-menu .pink-btn:hover {
    transition: all 0.2s ease-out;
    border-color: #da6d97;
    background-color: #da6d97;
}
</style>
