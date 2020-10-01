<template>
	<section id="cases">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h2>{{caseTitle}}</h2>
						<Filtercase :filters="filters" />
					</div>
				</div>

				<div class="row">
					<CaseboxSingle v-for="caseItem in cases" :caseItem="caseItem" :filters="filters" />
				</div>

				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="nocases" v-if="noCasesYet">no cases yet  <br>...</div>
					</div>
				</div>
				
			</div>
		<img src="../assets/img/cube-copy.png" class="cube">
	</section>
</template>

<script>
import Filtercase from '../components/Filtercase.vue'
import CaseboxSingle from '../components/CaseboxSingle.vue'
import {mapState} from 'vuex'

export default{
	components: {Filtercase, CaseboxSingle},
	props: {
		caseTitle: {
			type: String,
			required: true
		}
	},
	data(){
		return{
			showAlert: true
		}
	},
	computed: {
		...mapState('goods', ['cases', 'filters']),
		filteredParam(){
			return this.filters.find(item => item.active == true)
		},
		nomoreItems(){
			var ishod = this.filteredParam.title
			return this.cases.find(item => item.servs.includes(ishod))
		/*	return ishod*/
		},
		noCasesYet(){
			if(this.filteredParam.title === 'all'){
				return false
			}
			if(this.nomoreItems === undefined){
				return true
			}
		}
	}
}
</script>
