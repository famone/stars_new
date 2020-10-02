<template>
	<section id="servinner">
		<img src="../../assets/img/cube-copy.png" alt="" class="servcube">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 text-center">
				<img :src="server.imgBig" class="singlecase-img">
			</div>
			<div class="col-lg-8">
				<h1>{{server.title}}</h1>
				<p class="grey-txt" v-html="server.fullDescr"></p>
				<hr>
				<h4>What we do:</h4>
				<div class="results">
					<p class="grey-txt" v-for="item in server.whatDo"><img src="../../assets/img/checker.svg" 
						class="checker"> {{item}}</p>
				</div>
			</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		props: {
			server: {
				type: Object,
				required: true
			}
		}
	}
</script>