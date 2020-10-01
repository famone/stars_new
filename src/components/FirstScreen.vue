<template>
	<section id="main">
		<img src="../assets/img/3d.png" class="d3img wow fadeInUp" data-wow-delay="1s" 
		:class="{ac3d: menuOpened}">
		<div class="container">
			<div class="subtitle">
				<div class="lineleft">
				</div>
				<span>Marketing Agency</span>
			</div>
			<h1 class="wow fadeIn">We are <br>
			<span>
			<vue-typer
			  :text='["innovative", "dynamic", "young"]'
			  :repeat='Infinity'
			  :shuffle='true'
			  initial-action='erasing'
			  :pre-type-delay='70'
			  :type-delay='70'
			  :pre-erase-delay='2500'
			  :erase-delay='30'
			  erase-style='backspace'
			  :erase-on-complete='false'
			  caret-animation='blink'
			></vue-typer>
			</span> <br>
			marketing</h1>
			<div class="scroll-btn">
				<img src="../assets/img/scroll.svg" alt="">
				<span>Scroll down</span>
			</div>
		</div>
	</section>
</template>


<script>
import {mapState} from 'vuex'

export default{
	computed: {
		...mapState('goods', ['menuOpened']),
	}
}

</script>

<style>
.caret{
	display: none!important;
}
</style>