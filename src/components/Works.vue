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
					<p class="small-white">#{{work.categoriy}}</p>
					<div class="work-img" :style="{'background-image': 'url(' + work.img + ')'}"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import popwork from '../components/popwork.vue'

	export default{
		components: {popwork},
		data(){
			return{
				popImages: [],
				popup: false,
				works: [
					{
						name: 'Spanish Poker Festival',
						img: require('../assets/img/work1.jpg'),
						categoriy: 'Live streaming',
						images: [
						'https://uc3afdf77603fab8c862554679fc.previews.dropboxusercontent.com/p/thumb/AA8kMttqdc3-e0H6QiXjYCY_wYUV097OqnHSLKh_lnT4niJQqZCxEOW7DMTdTNiSm-IH_2xwbWL2plbU7uU_7keiTB9HkrKmsOSdHFx94U9GKbPXrgIXrq7zSDC-zn1ltq8eA7zuUHU4KckBkrIda84c-YWpFfZF4yDT6TjWF6Kxw7eUNAViKpsE_jc4zCJK_2hTjlWGK8CzJVrhnbQgPpPkGGl1kL-sXU70qqi79vVyQVjZ01uw44VCRHIz8G5SaNBpG3BQ4xHrmpdJIPUGlRjVbeKriIZdsKwAFqS9uQUzARD1hHLZ9eMuVO25GpRqOXSGWYw2PLA5vtu6XZJpLSJJ8yfx0gmga_cUOfIUyi1iaw/p.jpeg?fv_content=true&size_mode=5',
					'https://uceda09d3d34a51a48e6dd67fdd3.previews.dropboxusercontent.com/p/thumb/AA-Bmo5kyadYsKd1PDU2zTEjSNcuHhtKbF0v---4xF_oyxUKxPNTB0uv7HB-AFdhzyKeMNmggfWulVTa1eoT3qRoExoQxxSETw7BQPfTvZwoZhYOfey5vG2hG3xtyoHnxXWMden8LL-4z60QbDWzbv8kzHXc7mORt6xkvjUEopBwkuRYtGBp9xFC4jAFtIthlEQQVSXw_86Rd1kD0Xts5os6a071N7Ly2CgosjNl_DxM8tfKyhRrWR_HjBPWcPv-xHoUVNoybRETssvk-Ld3kZ25kY4SJRpuOA_s1W3ww12Y7iDx6VS1-4lVr765VZGZBqyYG4SMyo-i6a2IlOxMK1Q9091LDYldP3BMXmodT9l55g/p.jpeg?fv_content=true&size_mode=5',
				],
					},
					{
						name: 'Spanish Poker Festival',
						img: require('../assets/img/work1.jpg'),
						categoriy: 'Marketing',
						images: [
						'https://uc3afdf77603fab8c862554679fc.previews.dropboxusercontent.com/p/thumb/AA8kMttqdc3-e0H6QiXjYCY_wYUV097OqnHSLKh_lnT4niJQqZCxEOW7DMTdTNiSm-IH_2xwbWL2plbU7uU_7keiTB9HkrKmsOSdHFx94U9GKbPXrgIXrq7zSDC-zn1ltq8eA7zuUHU4KckBkrIda84c-YWpFfZF4yDT6TjWF6Kxw7eUNAViKpsE_jc4zCJK_2hTjlWGK8CzJVrhnbQgPpPkGGl1kL-sXU70qqi79vVyQVjZ01uw44VCRHIz8G5SaNBpG3BQ4xHrmpdJIPUGlRjVbeKriIZdsKwAFqS9uQUzARD1hHLZ9eMuVO25GpRqOXSGWYw2PLA5vtu6XZJpLSJJ8yfx0gmga_cUOfIUyi1iaw/p.jpeg?fv_content=true&size_mode=5',
					'https://uceda09d3d34a51a48e6dd67fdd3.previews.dropboxusercontent.com/p/thumb/AA-Bmo5kyadYsKd1PDU2zTEjSNcuHhtKbF0v---4xF_oyxUKxPNTB0uv7HB-AFdhzyKeMNmggfWulVTa1eoT3qRoExoQxxSETw7BQPfTvZwoZhYOfey5vG2hG3xtyoHnxXWMden8LL-4z60QbDWzbv8kzHXc7mORt6xkvjUEopBwkuRYtGBp9xFC4jAFtIthlEQQVSXw_86Rd1kD0Xts5os6a071N7Ly2CgosjNl_DxM8tfKyhRrWR_HjBPWcPv-xHoUVNoybRETssvk-Ld3kZ25kY4SJRpuOA_s1W3ww12Y7iDx6VS1-4lVr765VZGZBqyYG4SMyo-i6a2IlOxMK1Q9091LDYldP3BMXmodT9l55g/p.jpeg?fv_content=true&size_mode=5',
				],
					},
					{
						name: 'Spanish Poker Festival',
						img: require('../assets/img/work1.jpg'),
						categoriy: 'Video making',
						images: [
						'https://uc3afdf77603fab8c862554679fc.previews.dropboxusercontent.com/p/thumb/AA8kMttqdc3-e0H6QiXjYCY_wYUV097OqnHSLKh_lnT4niJQqZCxEOW7DMTdTNiSm-IH_2xwbWL2plbU7uU_7keiTB9HkrKmsOSdHFx94U9GKbPXrgIXrq7zSDC-zn1ltq8eA7zuUHU4KckBkrIda84c-YWpFfZF4yDT6TjWF6Kxw7eUNAViKpsE_jc4zCJK_2hTjlWGK8CzJVrhnbQgPpPkGGl1kL-sXU70qqi79vVyQVjZ01uw44VCRHIz8G5SaNBpG3BQ4xHrmpdJIPUGlRjVbeKriIZdsKwAFqS9uQUzARD1hHLZ9eMuVO25GpRqOXSGWYw2PLA5vtu6XZJpLSJJ8yfx0gmga_cUOfIUyi1iaw/p.jpeg?fv_content=true&size_mode=5',
					'https://uceda09d3d34a51a48e6dd67fdd3.previews.dropboxusercontent.com/p/thumb/AA-Bmo5kyadYsKd1PDU2zTEjSNcuHhtKbF0v---4xF_oyxUKxPNTB0uv7HB-AFdhzyKeMNmggfWulVTa1eoT3qRoExoQxxSETw7BQPfTvZwoZhYOfey5vG2hG3xtyoHnxXWMden8LL-4z60QbDWzbv8kzHXc7mORt6xkvjUEopBwkuRYtGBp9xFC4jAFtIthlEQQVSXw_86Rd1kD0Xts5os6a071N7Ly2CgosjNl_DxM8tfKyhRrWR_HjBPWcPv-xHoUVNoybRETssvk-Ld3kZ25kY4SJRpuOA_s1W3ww12Y7iDx6VS1-4lVr765VZGZBqyYG4SMyo-i6a2IlOxMK1Q9091LDYldP3BMXmodT9l55g/p.jpeg?fv_content=true&size_mode=5',
				],
					},
				]
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