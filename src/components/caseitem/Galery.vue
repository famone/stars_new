<template>
	<section id="galery">
		<div class="container">
			<div class="float-div">
				<div class="col-lg-6" v-for="gal in caser.galery">
					<div class="w-50" :style="{'background-image': 'url(' + gal + ')'}"></div>
				</div>
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