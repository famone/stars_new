<template>
	<section id="inner">
		<div class="container">
			<div class="col-lg-12">
				<div class="subtitle">
					<div class="lineleft"></div>
					<span>{{caser.theme}}</span>
				</div>
			</div>
			<div class="col-lg-5">
				<h1>{{caser.title}}</h1>
				<h5 class="under-title" v-for="serv in caser.servs" >#{{serv}}</h5>
			</div>
			<div class="col-lg-4 col-lg-offset-2 result-outliner">
				<h6>Main task:</h6>
				<p class="grey-txt" v-for="task in caser.mainTask">{{task}}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default{
	props: {
		caser: {
			type: Object,
			required: true
		}
	}
}
</script>