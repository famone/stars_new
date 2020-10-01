<template>
	<section id="slider" :class="{ptop0: this.$route.path === '/services'}">
		<div class="container">
			<swiper ref="mySwiper" :options="swiperOptions" class="slider">
				<swiper-slide v-for="serv in services" class="text-center">		
					<div class="serv-box text-center">
						<img :src="serv.img" >
						<h4>{{serv.title}}</h4>
						<p class="grey-txt">{{serv.miniDescr}}</p>
						<router-link tag="a" :to="'/services/' + serv.id" >
							<button class="stars-btn">See examples</button>
						</router-link>
					</div>

				</swiper-slide>
	  					</swiper>

	  			<div class="slider-bottom">
	  				<div class="swiper-pagination"></div>
	  				<div class="navigation">
	  					<div class="prevBtn" slot="button-prev"></div>	
	  					<div class="nextBtn" slot="button-next"></div>
					</div>
					<div v-if="this.$route.path !== '/services'">
						<router-link tag="a" to="/services" class="vio-link hidden-xs">
							Show all services 
						</router-link>
					</div>
					
	  			</div>
		</div>
	</section>
</template>


<script>
import {mapState} from 'vuex'

	export default{
		data(){
			return{
				numsl: '',
				swiperOptions: {
			      spaceBetween: 0,
			      centeredSlides: true,
			      draggable: true,
			      breakpoints: {
			        320: {
			          slidesPerView: 1
			        },
			        768: {
			          slidesPerView: 2
			        },
			        1150: {
			          slidesPerView: 3
			        }
			      },
			      loop: true,
			      navigation: {
			          nextEl: '.navigation .nextBtn',
			          prevEl: '.navigation .prevBtn',
			       },
			       pagination: {
				        el: '.swiper-pagination',
				        type: 'fraction',
				      },

			      },
			      swOption: '0'
			}
		},
		computed: {
			swiper(){
	       		return this.$refs.mySwiper.$swiper
	    	},
	    	...mapState('goods', ['services']),
		}
	}
</script>