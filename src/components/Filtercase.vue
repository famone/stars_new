<template>
	<div class="filter-box">
		<div class="filter">
		<button v-for="(filt, index) in filters" :key="index" @click="filterCase(index)" :class="{actFilter: filt.active}">#{{filt.title}}</button>
	</div>
	</div>
</template>


<script>
	export default{
		props: {
			filters:{
				type: Array,
				required: true
			}
		},
		data(){
			return{
				
			}
		},
		methods: {
			filterCase(index){

				this.filters.forEach(item =>{
					item.active = false
				})


				this.filters[index].active = true
			}
		}
	}
</script>

