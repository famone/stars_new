<template>
	<div>
		<Innerbox :title="innerTitle"/>
		<ServSlider />
		<Works />
	</div>
</template>

<script>
import Innerbox from '../components/Innerbox.vue'
import ServSlider from '../components/ServSlider.vue'
import Works from '../components/Works.vue'

export default{
	components: {Innerbox, ServSlider, Works},
	data(){
		return{
			innerTitle: 'Our  services'
		}
	},
	created(){
		console.log(this.$route.path)
	}
}
</script>