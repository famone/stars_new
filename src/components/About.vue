<template>
	<section id="about">
		<div class="container">
			<div class="col-lg-12 text-right">
				<div class="subtitle">
					<div class="lineleft">
					</div>
					<span>About</span>
			    </div>
			    
			</div>
			<div class="col-lg-6">
				<video src="http://stars-media.cz/wp-content/uploads/2020/12/stars-showreel-3.mp4" autoplay="true" loop="loop" playsinline="playsinline" muted="muted" controls="true" class="video__player"></video>
			</div>
			<div class="col-lg-6">
				<h2 class=" fadeInUp" style="color: #111029;margin-bottom: 30px;line-height: 90%;">
			    	We are Stars
			    </h2>

			    <p class="black-txt">
			    	We are a young team of passionate marketers & creators placing your needs at the center of all our work. <br><br>
					Driven to understand your brand, your goals and your customers, we will offer you unique solutions and deliver them to mesmerize your audience.
			    </p>

			    <router-link tag="a" to="/about">
			    	<button class="stars-btn">Our team<img src="../assets/img/arr.svg" alt=""></button>
			    </router-link>
			</div>
		</div>
	</section>
</template>


<style scoped>
	.subtitle{
		display: flex;
		justify-content: flex-end;
	}
	.video__player{
		width: 100%;
	}
</style>

