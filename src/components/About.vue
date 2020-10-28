<template>
	<section id="about">
		<div class="container">
			<div class="col-lg-12 text-right">
				<div class="subtitle">
					<div class="lineleft">
					</div>
					<span>About</span>
			    </div>
			   <h2 class="big-txt wow fadeInUp">
			    	We are Stars
			    </h2>
			    
			</div>
			<div class="col-lg-6">
				<iframe id="videoPresa" class="wow fadeInUp" src="https://player.vimeo.com/video/81699069?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
			</div>
			<div class="col-lg-6">
				

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
</style>

