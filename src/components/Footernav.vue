<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-2">
				<div class="logo">
					<img src="../assets/img/minilogo.svg" alt="">
				</div>
			</div>
			<div class="col-lg-8">
				<h2>You only have one <br>
				chance to make your <br>
			business better.</h2>
			<h5>Let’s make it together.</h5>
			</div>
			<div class="col-lg-2">
				<ul class="footer-navigation">
					<router-link tag="li" :to="nav.link" v-for="nav in navigation">{{nav.name}}</router-link>
				</ul>
			</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default{
		data(){
			return{
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
		}
	}
</script>