<template>
	<div class="my-projects-container">
		<Carousel
			v-model="currentSlide"
			:itemsToShow="state.mobileVersion ? 1 : 3"
			:wrapAround="true"
			:autoplay="3000"
			:transition="500">
			<Slide
				v-for="project in projectList"
				:key="project.title">
				<Card class="project-card">
					<template #header>
						<img
							:src="project.image"
							style="height: 15rem" />
					</template>
					<template #title>
						<div class="mainColor">{{ project.title }}</div>
					</template>
					<template #content>
						<p class="mainColor">
							{{ project.title }}
						</p>
					</template>
					<template #footer>
						<div class="card-buttons">
							<Button
								label="Github"
								class="button-github" />
							<Button
								label="Online"
								class="button-online" />
						</div>
					</template>
				</Card>
			</Slide>
		</Carousel>
	</div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
	name: "MyProjects",
	props: { state: { type: Object, required: true } },
	components: {
		Carousel,
		Slide,
	},
	data() {
		return {
			currentSlide: 1,
			projectList: [
				{
					title: "Vuevalidate",
					description: "lorem4",
					githubLink: "",
					onlineLink: "",
					image:
						"https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png",
				},
				{
					title: "Quasar",
					description: "lorem4",
					githubLink: "",
					onlineLink: "",
					image:
						"https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png",
				},
				{
					title: "Vuetify & Apex chart",
					description: "lorem4",
					githubLink: "",
					onlineLink: "",
					image:
						"https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png",
				},
				{
					title: "Portfolio Vuetify",
					description: "lorem4",
					githubLink: "",
					onlineLink: "",
					image:
						"https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png",
				},
				{
					title: "RegistrationVuelidate",
					description: "lorem4",
					githubLink: "",
					onlineLink: "",
					image:
						"https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png",
				},
			],
		};
	},
};
</script>

<style scoped>
.my-projects-container {
	margin-top: 20px;
	padding-top: 20px;
	padding-bottom: 50px;
	margin-left: 10px;
	margin-right: 10px;
	max-width: 100%;
}
.project-card {
	margin: 20px;
	max-width: 400px;
	min-width: 250px;
	background-color: #3c3d43;
}
.button-github {
	background-color: transparent;
	border: 2px solid v-bind("state.colorMain");
	margin-right: 5px;
	color: v-bind("state.colorMain");
}
.button-online {
	background-color: transparent;
	border: 2px solid v-bind("state.colorMain");
	color: v-bind("state.colorMain");
}
.mainColor {
	color: v-bind("state.colorMain");
}
.lightColor {
	color: v-bind("state.colorLight");
}
.carousel__slide {
	padding: 0px;
}
.card-buttons {
	padding-bottom: 10px;
}

.carousel__viewport {
	perspective: 3000px;
}

.carousel__track {
	transform-style: preserve-3d;
}

.carousel__slide--sliding {
	transition: 0.5s;
}

.carousel__slide {
	opacity: 1;
	transform: rotateY(-20deg) scale(0.8);
}

.carousel__slide--prev {
	opacity: 1;
	transform: rotateY(-10deg) scale(0.8);
}

.carousel__slide--active {
	opacity: 1;
	transform: rotateY(0) scale(1.1);
}
.carousel__slide--active ~ .carousel__slide {
	transform: rotateY(20deg) scale(0.8);
}
.carousel__slide--next {
	opacity: 1;
	transform: rotateY(10deg) scale(0.8);
}
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
.pagination-container {
	display: flex;
	column-gap: 10px;
}
.paginate-buttons {
	height: 40px;
	width: 40px;
	border-radius: 20px;
	cursor: pointer;
	background-color: rgb(242, 242, 242);
	border: 1px solid rgb(217, 217, 217);
	color: black;
}
.paginate-buttons:hover {
	background-color: #d8d8d8;
}
.active-page {
	background-color: #3498db;
	border: 1px solid #3498db;
	color: white;
}
.active-page:hover {
	background-color: #2988c8;
}
</style>
