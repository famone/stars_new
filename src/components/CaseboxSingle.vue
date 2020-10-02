<template>
		<div class="col-lg-6 col-sm-6" 
	v-if="caseItem.servs.includes(filteredParam.title) ||  filteredParam.title === 'all' ">
		<div class="case-box">
			<div class="img-box">

				<div :style="{'background-image': 'url(' + caseItem.preBg + ')'}" class="img-bg"></div>
				<img :src="caseItem.logo" class="case-logo wow fadeIn" data-wow-delay=".3s">
				<router-link tag="a" :to="'/cases/' + caseItem.id" class="learn-more">
					<span>Learn<br>more</span>
				</router-link>
			</div>
			<div class="case-body">
				<h4>{{caseItem.title}}</h4>
				<p class="theme">{{caseItem.theme}}</p>
				<p class="hashtags"><span v-for="hash in caseItem.servs">#{{hash}} </span></p>
			</div>
		</div>
	</div>

</template>

<script>
export default{
	props: {
		caseItem: {
			type: Object,
			required: true
		},
		filters:{
				type: Array,
				required: true
			}
	},
	computed:{
		filteredParam(){
			return this.filters.find(item => item.active == true)
		}
	}
}
</script>