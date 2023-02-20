<script setup>
import { ref, computed } from "vue";

import { useWindowSize } from "@vueuse/core";
import IconCarousel from "./components/IconCarousel.vue";
import NavBar from "./components/NavBar.vue";
import Title from "./components/Title.vue";
import AboutMe from "./components/AboutMe.vue";
import TypeText from "./components/TypeText.vue";
import HorizontalLine from "./components/HorizontalLine.vue";
import MyProjects from "./components/MyProjects.vue";
import Work from "./components/Work.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";

const randomNum = ref(1);
randomNum.value = Math.floor(Math.random() * 10);
const colorList = [
	"rgb(36,72,191)", // 0 OK blue
	"rgb(97,228,8)", // 1 OK green lemon
	"rgb(20,143,94)", // 2 OK easy dark green
	"rgb(233,17,51)", // 3 red lipstick
	"rgb(32,194,240)", // 4 ligt easy blue
	"rgb(251,140,0)", // 5  roange
	"rgb(209,183,88)", // 6  yellow
	"rgb(25,131,27)", // 7  green
	"rgb(125, 152, 125)", // 8  xxx
	"rgb(191,224,176)", // 9 xxx
];
const { width, height } = useWindowSize();
const changeColor = (newValue) => {
	randomNum.value = Math.floor(Math.random() * 10);
};
const state = computed(() => {
	return {
		colorMain: colorList[randomNum.value],
		colorLight: "rgb(135,135,135)",
		mobileVersion: width.value < 720,
	};
});
</script>

<template>
	<XyzTransition
		appear
		duration="auto">
		<div xyz="fade flip-down stagger duration-20 delay-2 ease-out-back">
			<NavBar
				:randomNum="randomNum"
				:state="state"
				@on-change-color="changeColor" />
			<Title :state="state" />
			<IconCarousel
				:state="state"
				mirror />
			<TypeText
				text="/about-me"
				loop
				:state="state"
				:delay="500"
				:textDelay="3000"
				:cursorBlinkInterval="500"
				:reverseDelay="10" />
			<AboutMe :state="state" />
			<HorizontalLine :state="state" />
			<TypeText
				text="/my-experience"
				loop
				:state="state"
				:delay="500"
				:cursorBlinkInterval="500"
				:reverseDelay="10" />
			<Work :state="state" />
			<TypeText
				text="/my-projects"
				loop
				:state="state"
				:delay="500"
				:cursorBlinkInterval="500"
				:reverseDelay="10" />
			<MyProjects :state="state" />
			<TypeText
				text="/my-contact"
				loop
				:state="state"
				:delay="500"
				:cursorBlinkInterval="500"
				:reverseDelay="10" />
			<Contact :state="state" />
			<IconCarousel :state="state" />
			<Footer :state="state" />
		</div>
	</XyzTransition>
</template>
