<template>
	<div class="lines-first">
		<!-- <Innerbox :title="innerTitle"/> -->
	</div>
</template>



<script>
import Innerbox from '../components/Innerbox.vue'

export default{
	components: {Innerbox},
	data(){
		return{
			innerTitle: 'Contacts'
		}
	}
}
</script>