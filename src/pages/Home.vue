<template>
	<div>
		<div class="lines-first">
			<FirstScreen />
			<About />
		</div>
		<ServSlider />
		<Works />
		<CasesSection :caseTitle="'Cases'" />
	</div>
</template>

<script>
import FirstScreen from '../components/FirstScreen.vue'
import About from '../components/About.vue'
import ServSlider from '../components/ServSlider.vue'
import CasesSection from '../components/CasesSection.vue'
import Works from '../components/Works.vue'


export default{
	components: { FirstScreen, About, ServSlider, CasesSection, Works }
}
</script>