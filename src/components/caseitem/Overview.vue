<template>
	<section id="overview">
		<div class="container">
			<div class="col-lg-4">
				<h2>Overview</h2>
			</div>
			<div class="col-lg-8">
				<p class="grey-txt" v-html="caser.overview"></p>
			</div>
			<div class="col-lg-12">
				<img :src="caser.bigPhoto" class="w-100">
			</div>
		</div>
	</section>
</template>


<script>
export default{
	props: {
		caser: {
			type: Object,
			required: true
		}
	}
}
</script>