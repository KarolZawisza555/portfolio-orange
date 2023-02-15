<script setup>
import IconCarousel from "./components/IconCarousel.vue";
import NavBar from "./components/NavBar.vue";
import Title from "./components/Title.vue";
import AboutMe from "./components/AboutMe.vue";
import TypeText from "./components/TypeText.vue";
</script>

<template>
	<NavBar />
	<Title />
	<IconCarousel />
	<TypeText
		text="Frontend Developer"
		loop
		:delay="200"
		:cursorBlinkInterval="500"
		:reverseDelay="10" />
	<IconCarousel mirror />
	<AboutMe />
</template>

<style scoped></style>
