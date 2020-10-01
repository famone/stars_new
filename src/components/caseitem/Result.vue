<template>
	<section id="result">
		<div class="container">
			<h2>Results:</h2>
			<div class="results">
				<p class="white-txt" v-for="res in caser.results" >{{res}}</p>
			</div>
		</div>
		<img src="../../assets/img/cube-copy.png" class="cube2 hidden-xs hidden-sm">
	</section>
</template>

<script>
	export default{
		props :{
			caser: {
				required: true,
				type:  Object
			}
		}
	}
</script>