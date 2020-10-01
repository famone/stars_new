<template>
	<div class="videfon">
            
    		<!-- <video autoplay muted loop id="myVideo">
                <source :src="caser.video" type="video/mp4">
        	</video> -->

        		<div>
    			<iframe data-v-ddfea3ac="" :src="caser.video + videoPreset" allowtransparency allow="autoplay" id="myVideo"></iframe>
    		</div>



    	</div>
</template>

<script>
	export default{
		data(){
			return{
				videoPreset: '?loop=true&amp;byline=false&amp;controls=false&amp;fun=false&amp;muted=true&amp;portrait=false&amp;title=false&amp;autoplay=true&amp;transparent=true&amp;gesture=media'
			}
		},
		props: {
			caser: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style>
.videfon{
	position: relative;
    height: 90vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 0;
    background-image: url(../../assets/img/kingsbig.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.videfon img{
    position: relative;
    z-index: 100;
}
.videfon:before{
	content: '';
	height: 100%;
	position: absolute;
	width: 100%;
	background-color: #000;
	top: 0;
    opacity: .3;
	left: 0;
	z-index: 2;
}
#myVideo{
	position: absolute;
    right: 0;
    bottom: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-width: 100%;
    min-height: 100%;
    height: 56.25vw;
    width: 177.78vh;
    border-width: 0;
    outline-width: 0;
    z-index: 1;
}
</style>