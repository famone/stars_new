<template>
	<div>
		<Inner :server="getService(itemSlug)" />
		<CasesSection :caseTitle="'Examples'" />

	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Inner from '../components/servitem/Inner.vue'
import CasesSection from '../components/CasesSection.vue'

export default{
	components: {Inner, CasesSection},
	data(){
		return{
			itemSlug: '',
		}
	},
	computed: {
   		...mapGetters('goods', ['getService']),
	},
	created(){
		this.itemSlug = this.$route.params.id


		// скрипт для переключения фильтра на активной странице
		// this.$store.dispatch('goods/changeFilter', this.itemSlug)	
	}
}
</script>