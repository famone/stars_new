<template>
	<section id="about2">
		<div class="container">
			<div class="col-lg-7">
			    <h2 class="big-txt wow fadeInUp">
			    	{{title}}
			    </h2>
			    <p class="black-txt wow fadeInUp" v-if="this.$route.path === '/about'" >
			    	We are a young team of passionate marketers & creators placing your needs at the center of all our work. <br><br>
					Driven to understand your brand, your goals and your customers, we will offer you unique solutions and deliver them to mesmerize your audience.
			    </p>
			  <div class="subtitle wow fadeInUp" v-if="this.$route.path === '/about'" >
					<span><span class="bl-txt">We are</span> Stars </span>
			    </div>
			</div>
		</div>
	</section>
</template>


<script>
export default{
	props: {
		title: {
			type: String,
			require: true
		}
	}
}
</script>