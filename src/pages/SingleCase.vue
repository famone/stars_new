<template>
	<div>


		<Inner :caser="getCases(getSlug)" />

    	<videofon :caser="getCases(getSlug)" />

    	<Overview :caser="getCases(getSlug)" />
 
    	<Result :caser="getCases(getSlug)" />

    	<Galery :caser="getCases(getSlug)" />

    	<CasesSection :caseTitle="'Other cases'" />


	</div>
</template>



<script>
import {mapGetters} from 'vuex'
import Inner from '../components/caseitem/Inner.vue'
import Overview from '../components/caseitem/Overview.vue'
import CasesSection from '../components/CasesSection.vue'
import Galery from '../components/caseitem/Galery.vue'
import Result from '../components/caseitem/Result.vue'
import videofon from '../components/caseitem/videofon.vue'

export default{
	components: {Inner, Overview, CasesSection, Galery, Result, videofon},
	data(){
		return{
			itemSlug: '',
		}
	},
	computed: {
   		...mapGetters('goods', ['getCases']),

        getSlug(){
            return this.itemSlug = this.$route.params.id
        }
	},
	created(){
		this.itemSlug = this.$route.params.id
	}
}
</script>

