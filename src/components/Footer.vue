<template>
	<div id="formbox" :class="{ptop120: this.$route.path === '/services'}">
		<Formblock />
		<Footernav />
		<Copyright />
	</div>
</template>

<script>
import Formblock from '../components/Formblock.vue'
import Footernav from '../components/Footernav.vue'
import Copyright from '../components/Copyright.vue'

export default{
	components: {Formblock, Footernav, Copyright}
}
</script>