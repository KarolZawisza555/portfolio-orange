<template>
	<XyzTransition
		appear
		duration="auto">
		<div class="page-wrap">
			<div
				class="page-hero"
				xyz="fade small stagger ease-out-back">
				<div class="hero-logo xyz-nested"></div>
				<p class="hero-text xyz-nested">
					Curabitur blandit tempus porttitor. Morbi leo risus.
				</p>
			</div>
			<div
				class="page-features"
				xyz="fade flip-down stagger duration-10 delay-2 ease-out-back">
				<div class="feature-item xyz-nested">1</div>
				<div class="feature-item xyz-nested">2</div>
				<div class="feature-item xyz-nested">3</div>
			</div>
			<div
				class="page-section"
				xyz="fade small stagger delay-4 ease-in-out">
				<div
					class="section-left"
					xyz="fade left stagger">
					<div class="section-item xyz-nested">4</div>
					<div class="section-item xyz-nested">5</div>
					<div class="section-item xyz-nested">6</div>
				</div>
				<div
					class="section-right xyz-nested"
					xyz="fade big delay-10"></div>
			</div>
			<div
				class="page-footer"
				xyz="fade bottom ease-in-out delay-10">
				<div
					class="footer-logo xyz-nested"
					xyz="fade left ease-in-out delay-10"></div>
				<div
					class="footer-right"
					xyz="fade up stagger ease-in-out delay-10">
					<div class="footer-item xyz-nested">7</div>
					<div class="footer-item xyz-nested">8</div>
					<div class="footer-item xyz-nested">9</div>
				</div>
			</div>
		</div>
	</XyzTransition>
</template>

<script>
export default {
	name: "Animation",
	props: { state: { type: Object, required: true } },
};
</script>

