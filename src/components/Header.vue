<template>
	<header :class="{fixedHeader: menuActive}">
		<div class="container">
			<div class="shapka" :class="{darkHeader: this.$route.path === '/cases' || this.$route.path === '/about'  || this.$route.path === '/'}">
				<div class="nav-elements">
					<router-link tag="div" to="/" class="logo" @click="openMenu()">
						<img src="../assets/img/logoW.svg" v-if="this.$route.path === '/cases' || this.$route.path === '/about' || menuActive">
						<img src="../assets/img/logo.svg" v-else>
					</router-link>
					<div class="social hidden-xs" :class="{darkicons: this.$route.path === '/cases' || this.$route.path === '/about' }" >
						<a href="">
							<img src="../assets/img/youtube_w.svg" v-if="this.$route.path === '/cases' || this.$route.path === '/about' ">
							<img src="../assets/img/youtube.svg" v-else>
							Youtube
						</a>
						<a href="">
							<img src="../assets/img/inst_w.svg" v-if="this.$route.path === '/cases' || this.$route.path === '/about' ">
							<img src="../assets/img/inst.svg" v-else>
							Instagram
						</a>
					</div>
				</div>

				<div class="menu-btn" @click="openMenu()" :class="{acMenu: menuActive}">
					<span></span>

<p class="tapOpen hidden-xs hidden-sm" v-if="this.$route.path === '/cases' || this.$route.path === '/about'  || this.$route.path === '/'" >Tap to open menu <img src="../assets/img/arr.svg"></p>
<p class="tapOpen hidden-xs hidden-sm" 
style="color: #000;" v-else>Tap to open menu 
<img 
src="../assets/img/sliderarr.svg" style="transform: rotate(180deg)!important;"></p>

					<span></span>
				</div>
			</div>
		</div>
		
		<div class="sidebar" :class="{sidebarAc: menuActive}">
			<div class="box">
				<div class="col-lg-6">
					<div class="cont">
							<img src="../assets/img/mail.svg" alt="">
							<a href="mailto:karapet@stars-ent.com">karapet@stars-ent.com</a>
						</div>
						<div class="cont">
							<img src="../assets/img/tel.svg" alt="">
							<a href="tel:+420776685999">+420 776 685 999</a>
						</div>
				</div>
				<div class="col-lg-6">
					<ul class="header-navigation" @click="openMenu()">
					<router-link tag="li" :to="nav.link" v-for="nav in navigation">{{nav.name}}</router-link>
						
					</ul>
				</div>

				<div class="col-lg-12">
					<div class="social">
						<a href=""><img src="../assets/img/inst.svg" alt="">Youtube</a>
						<a href=""><img src="../assets/img/youtube.svg" alt="">Instagram</a>
					</div>
				</div>
			</div>
		</div>
		<div class="offBar" :class="{offBarAc: menuActive}"></div>
	</header>

</template>

<script>
export default{
	data(){
		return{
			menuActive: false,
			navigation: [
				{
					name: 'Home',
					link: '/'
				},
				{
					name: 'About us',
					link: '/about'
				},
				{
					name: 'Services',
					link: '/services'
				},
				{
					name: 'Cases',
					link: '/cases'
				},
				{
					name: 'Contacts',
					link: '/contacts'
				},
			]
		}
	},
	methods: {
		openMenu(){
			this.menuActive = !this.menuActive

			this.$store.dispatch('goods/openMenu')
		}
	}
}
</script>

<style>

</style>