<template>
	<section id="works">
		<popwork v-if="popup" @closePop="closePop" :popImages="popImages"  />
		<div class="container">
			<div class="col-lg-12 text-center">
				<h2>Our works</h2>
			</div>

			<div class="col-lg-4" v-for="(work, index) in works">
				<div class="work-item" @click="popOpen(index)">
					<p class="white-txt">{{work.name}}</p>
					<p class="small-white">#{{work.hashtag}}</p>
					<div class="work-img" :style="{'background-image': 'url(' + work.img + ')'}"></div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import popwork from '../components/popwork.vue'
import {mapGetters} from 'vuex'

	export default{
		components: {popwork},
		computed: {
			...mapGetters({ works: "goods/getWorks" }),
		},
		data(){
			return{
				popImages: [],
				popup: false,
				// works: [
				// 	{
				// 		name: 'Spanish Poker Festival',
				// 		img: require('../assets/img/work1.jpg'),
				// 		categoriy: 'Live streaming',
				// 		images: [require('../assets/img/work1.jpg'), require('../assets/img/work1.jpg')],
				// 	},
				// 	{
				// 		name: 'Spanish Poker Festival',
				// 		img: require('../assets/img/work1.jpg'),
				// 		categoriy: 'Live streaming',
				// 		images: [require('../assets/img/work1.jpg'), require('../assets/img/work1.jpg')],
				// 	},
				// 	{
				// 		name: 'Spanish Poker Festival',
				// 		img: require('../assets/img/work1.jpg'),
				// 		categoriy: 'Live streaming',
				// 		images: [require('../assets/img/work1.jpg'), require('../assets/img/work1.jpg')],
				// 	},
				// ]
			}
		},
		methods: {
			popOpen(index){
				this.popup = true
				this.popImages = this.works[index].images
			},
			closePop(){
				this.popup = false
				this.popImages = []
			}
		}
	}
</script>	