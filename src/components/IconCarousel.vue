<template>
	<div height="300px">
		<!-- :autoplay="100"
        :transition="1000"> -->
		<Carousel
			:itemsToShow="8"
			:wrapAround="true"
			:autoplay="1000"
			:transition="500">
			<Slide
				v-for="icon in iconList"
				:key="icon">
				<div class="icon-item">
					<Icon
						:icon="icon"
						class="icon-class" />
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
	name: "Autoplay",
	components: {
		Carousel,
		Slide,
		Pagination,
	},
	data() {
		return {
			iconList: [
				"simple-icons:vuedotjs",
				"tabler:brand-javascript",
				"carbon:logo-python",
				"codicon:terminal-bash",
				"uil:linux",
				"simple-icons:vuetify",
				"simple-icons:quasar",
				"simple-icons:postgresql",
				"mdi:material-ui",
				"mdi:microsoft-visual-studio-code",
				"uil:windows",
				"cib:sass",
				"akar-icons:html-fill",
				"simple-icons:nuxtdotjs",
				"akar-icons:css-fill",
				"file-icons:vite",
				"cib:jest",
				"bi:git",
			],
		};
	},
});
</script>

<style scoped>
.icon-item {
	padding: 4px;
}
.icon-class {
	font-size: 40px;
}
.carousel__slide {
	padding: 5px;
}

.carousel__viewport {
	perspective: 2000px;
}

.carousel__track {
	transform-style: preserve-3d;
}

.carousel__slide--sliding {
	transition: 0.5s;
}

.carousel__slide {
	opacity: 1;
	transform: rotateY(-20deg) scale(1);
}

.carousel__slide--prev {
	opacity: 1;
	transform: rotateY(-10deg) scale(1);
}

.carousel__slide--active {
	color: rgb(230, 74, 25);
	opacity: 1;
	transform: rotateY(0) scale(1.2);
}
.carousel__slide--active ~ .carousel__slide {
	transform: rotateY(20deg) scale(1);
}
.carousel__slide--next {
	opacity: 1;
	transform: rotateY(10deg) scale(1);
}
</style>
