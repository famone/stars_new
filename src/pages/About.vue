<template>
	<div>
		<Improive />
		<div class="lines-first">
			<Innerbox :title="innerTitle"/>
		</div>

		<Team />

		<CasesSection :caseTitle=" 'Our cases' " />


	</div>
</template>

<script>
import Innerbox from '../components/Innerbox.vue'
import Improive from '../components/Improve.vue'
import CasesSection from '../components/CasesSection.vue'
import Team from '../components/Team.vue'

export default{
	components: {Innerbox, Improive, CasesSection, Team},
	data(){
		return{
			innerTitle: 'About us'
		}
	},
	created(){
		console.log(this.$route)
	}
}
</script>
