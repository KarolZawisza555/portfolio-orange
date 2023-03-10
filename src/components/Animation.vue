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
				<div class="feature-item xyz-nested">sssssss</div>
				<div class="feature-item xyz-nested">sssssss</div>
				<div class="feature-item xyz-nested">sssssssss</div>
			</div>
			<div
				class="page-section"
				xyz="fade small stagger delay-4 ease-in-out">
				<div
					class="section-left"
					xyz="fade left stagger">
					<div class="section-item xyz-nested">sssssss</div>
					<div class="section-item xyz-nested">aaaaaaa</div>
					<div class="section-item xyz-nested">ssssssssssssss</div>
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
					<div class="footer-item xyz-nested"></div>
					<div class="footer-item xyz-nested"></div>
					<div class="footer-item xyz-nested"></div>
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

