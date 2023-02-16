<template>
	<div :class="mirror ? 'icon-carousel-main mirror' : 'icon-carousel-main'">
		<!-- :autoplay="100"
        :transition="1000"> -->
		<Carousel
			:itemsToShow="state.mobileVersion ? 12 : 8"
			:wrapAround="true"
			:autoplay="1000"
			:transition="500">
			<Slide
				v-for="icon in iconList"
				:key="icon">
				<div class="icon-item">
					<Icon
						:width="state.mobileVersion ? 28 : 40"
						:horizontalFlip="mirror"
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
	props: {
		mirror: { type: Boolean, default: false },
		state: { type: Object, required: true },
	},
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
.icon-carousel-main {
	height: 70px;
}
.mirror {
	transform: scale(-1, 1);
}
.icon-item {
	padding: 4px;
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
	color: v-bind("state.colorMain");
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
