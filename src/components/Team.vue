<template>
	<section id="team">
		<!-- <img src="../assets/img/cube-copy.png" class="cube3 hidden-xs hidden-sm"> -->
		<div class="container">
			<div class="col-lg-12 wow fadeInUp">
				<h2>Our Team</h2>
				<p class="teamsub black-txt">Meet the “STARS” </p>
			</div>
			<div class="col-lg-4 wow fedeInUp">
				<div class="team-member text-center">
					<div class="teammember">
						<img src="../assets/img/kara2.png">
					</div>
					
					<p class="black-txt">Karapet Aleksanyan</p>
					<p class="position">CEO, Marketing</p>
				</div>
			</div>
			<div class="col-lg-4 wow fedeInUp">
				<div class="team-member text-center">
					<div class="teammember">
						<img src="../assets/img/mika.png">
					</div>
					<p class="black-txt">Mika Murat</p>
					<p class="position">Project Manager</p>
				</div>
			</div>
			<div class="col-lg-4 wow fedeInUp">
				<div class="team-member text-center">
					<div class="teammember">
						<img src="../assets/img/zak.png">
					</div>
					<p class="black-txt">Zak Selyavin</p>
					<p class="position">Videomaker</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
	export default{

	}
</script>


<style>
	.teammember{
		position: relative;
		width: 270px;
		margin: 0 auto;
	}
	.teammember img{
		width: 270px;
	}
	.teammember:before{
		position: absolute;
		content: '';
		border:2.5px solid #C4C4C4;
		border-radius: 500px;
		height: 290px;
		width: 290px;
		left: -10px;
		top: -10px;
	}
</style>