<template>
	<div>
		<Innerbox :title="innerTitle"/>
		<ServSlider />
	</div>
</template>

<script>
import Innerbox from '../components/Innerbox.vue'
import ServSlider from '../components/ServSlider.vue'

export default{
	components: {Innerbox, ServSlider},
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