<template>
	<section id="copyright">
		<div class="container">
			<div class="footer-shapka">
				<div class="webink">
						<a href="https://webink.site/">Developed by - Webink. 2020</a>
				</div>
				<div class="backToTop" @click="backToTop()">
					Back to top
				</div>
			</div>
		</div>
	</section>
</template>	

<script>
export default{
	methods: {
		backToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
           }
	}
}
</script>

<style>
.footer-shapka{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 44px 0;
	border-top: 1px #2B395A solid;
}
#copyright{
	background-color: #00113B;
}
.webink a{
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	line-height: 24px;
}
.backToTop{
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	cursor: pointer;
	line-height: 24px;
	transition: all .3s ease-in-out;
}
.backToTop:hover{
	color: #FF6800;
}
.webink:hover{
	animation: 1s myshake alternate;
}
@keyframes myshake{
	0% {
	    transform: skewX(-15deg);
	}
	5% {
	    transform: skewX(15deg);
	}
	10% {
	    transform: skewX(-15deg);
	}
	15% {
	    transform: skewX(15deg);
	}
	20% {
	    transform: skewX(0deg);
	}
	100% {
	    transform: skewX(0deg);
	}
}
</style>