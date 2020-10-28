<template>
	<section id="slider" :class="{ptop0: this.$route.path === '/services'}">
		<div class="container">
			<div class="rowd" v-if="this.$route.path === '/'">
				<h2 class="wow fadeInUp">Services</h2>
			</div>
			<div class="rowd">
				<swiper ref="mySwiper" :options="swiperOptions" class="slider" v-if="servSlides !== '' ">
				<swiper-slide v-for="(serv, index) in servSlides" :key="index" class="text-center">		
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
			</div>

	  			<div class="slider-bottom">
	  				<div class="swiper-pagination"></div>
	  				<div class="navigation">
	  					<div class="prevBtn" slot="button-prev"></div>	
	  					<div class="nextBtn" slot="button-next"></div>
					</div>
					<div v-if="this.$route.path !== '/services'" class="hidden-xs">
						<router-link tag="a" to="/services">
							<button class="stars-btn">Show all services <img src="../assets/img/arr.svg" alt=""></button>
						</router-link>
					</div>
					
	  			</div>
		</div>
	</section>
</template>


<script>
import {mapState} from 'vuex'
import axios from 'axios'

	export default{
		data(){
			return{
				numsl: '',
				servSlides: '',
				swiperOptions: {
			      spaceBetween: 0,
			      centeredSlides: true,
			      draggable: true,
			      breakpoints: {
			        320: {
			          slidesPerView: 1.3,
			          centeredSlides: false
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
	    	...mapState('goods', ['newServ'])
		},
		created(){
			axios
			.get('https://stars-media.cz/wp-json/stars/v1/get/services')
			.then(response =>{
				console.log(response.data)
				this.servSlides = response.data
			})

		}
	}
</script>