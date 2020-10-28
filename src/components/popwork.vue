<template>
	<div class="popwork">
		<div class="cross" @click="closePop($emit)">✕</div>


	<div class="popGallery" v-if="popImages">
		<img :src="popImages[slideIndex]" class="gallery-img">
	  			<div class="navigation">
	  				<div class="nextPop" @click="prevSlide"></div>
	  					<div class="prevPop" @click="nextSlide"></div>	
	  					
					</div>
		
	</div>


	</div>
</template>

<script>
	export default{
		props: {
			popImages: {
				required: true,
				type: Array
			}
		},
		methods: {
			closePop(){
				this.$emit('closePop')
			},
			prevSlide(){
				if(this.slideIndex == 0){
					return this.slideIndex = this.popImages.length - 1
				}else {
					this.slideIndex--
				}
			},
			nextSlide(){
				let maximum = this.popImages.length - 1

				if(this.slideIndex == maximum){
					return this.slideIndex = 0
				}else {
					this.slideIndex++
				}
			},
		},
		computed: {
			
		},
		data(){
			return{
				slideIndex: 0
			}
		}
	}
</script>
