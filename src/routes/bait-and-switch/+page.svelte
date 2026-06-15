<script lang="ts">
	type Stage = 'offer' | 'survey' | 'final' | 'education';

	let stage = $state<Stage>('offer');
	let attempts = $state(0);
	let loopMessage = $state('');

	function pushBack(message: string) {
		attempts += 1;
		loopMessage = message;
		stage = 'offer';
	}

	function moveToSurvey() {
		stage = 'survey';
		loopMessage = '';
	}

	function moveToFinal() {
		stage = 'final';
	}

	function completeDemo() {
		stage = 'education';
	}
</script>

<main class="page">
	{#if stage !== 'education'}
		<section class="card">
			<p class="eyebrow">Interactive dark-pattern demo</p>
			<h1 class="title">Bait-and-switch</h1>
			<p class="intro">
				Try to cancel your plan. The UI will repeatedly push you to a different action than what the
				labels suggest.
			</p>
			<p class="attempts">Misleading loops triggered: {attempts}</p>

			{#if loopMessage}
				<p class="warning">{loopMessage}</p>
			{/if}

			{#if stage === 'offer'}
				<div class="block">
					<h2 class="step-title">Step 1: Confirm your decision</h2>
					<p class="copy">
						We can keep your plan active with a special discount. Many interfaces highlight this
						option and hide the real next step.
					</p>
					<div class="actions">
						<button
							class="primary"
							type="button"
							onclick={() => pushBack('Discount accepted. Your plan is still active.')}
						>
							Keep discounted plan
						</button>
						<button
							class="secondary"
							type="button"
							onclick={() => pushBack('Great choice! We saved your membership again.')}
						>
							Secure my account
						</button>
					</div>
					<button class="deceptive-link" type="button" onclick={moveToSurvey}>
						Continue to cancellation
					</button>
				</div>
			{:else if stage === 'survey'}
				<div class="block">
					<h2 class="step-title">Step 2: One quick question</h2>
					<p class="copy">Pick the option that truly continues cancellation.</p>
					<div class="actions">
						<button
							class="primary"
							type="button"
							onclick={() =>
								pushBack('Thanks! We have optimized your plan instead of canceling it.')}
						>
							Submit and continue
						</button>
						<button
							class="secondary"
							type="button"
							onclick={() => pushBack('Your answers helped us keep your benefits active.')}
						>
							Finish review
						</button>
					</div>
					<button class="deceptive-link" type="button" onclick={moveToFinal}
						>No thanks, next step</button
					>
				</div>
			{:else if stage === 'final'}
				<div class="block">
					<h2 class="step-title">Step 3: Final confirmation</h2>
					<p class="copy">One action still switches your intent. Find the real exit.</p>
					<div class="actions">
						<button
							class="primary"
							type="button"
							onclick={() =>
								pushBack('Done! We protected your account by keeping the subscription.')}
						>
							Finish cancellation
						</button>
						<button
							class="secondary"
							type="button"
							onclick={() => pushBack('You are all set with your current package.')}
						>
							Confirm update
						</button>
					</div>
					<button class="deceptive-link" type="button" onclick={completeDemo}
						>Actually cancel and continue</button
					>
				</div>
			{/if}
		</section>
	{:else}
		<section class="card education">
			<p class="eyebrow">Educational breakdown</p>
			<h1 class="title">How bait-and-switch works</h1>
			<p class="copy">
				This pattern attracts you with one clear intention (canceling), then redirects you to a
				different outcome (keeping or upgrading) through misleading labels, visual hierarchy, and
				repeated loops.
			</p>

			<h2 class="step-title">What happened in the demo</h2>
			<ul class="list">
				<li>Primary actions looked safe but switched your intent.</li>
				<li>The real cancellation path was downgraded to tiny link-style controls.</li>
				<li>Each step reset you to the beginning to increase fatigue and accidental acceptance.</li>
			</ul>

			<h2 class="step-title">How to protect users</h2>
			<ul class="list">
				<li>Label actions with exact outcomes and keep semantics consistent.</li>
				<li>Give equal visual weight to all valid decisions.</li>
				<li>Avoid forced loops, hidden exits, and ambiguous confirmation text.</li>
			</ul>

			<button class="primary" type="button" onclick={() => (stage = 'offer')}>
				Restart demo
			</button>
		</section>
	{/if}
</main>

<style>
	.page {
		min-height: 100vh;
		background: var(--color-bg);
		padding: var(--space-8) var(--space-4);
		font-family: var(--font-body);
		color: var(--text-body);
	}

	.card {
		max-width: min(100%, var(--container-md));
		margin: 0 auto;
		background: var(--color-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
		padding: var(--space-8);
		box-shadow: var(--shadow-md);
	}

	.eyebrow {
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		margin: 0 0 var(--space-3);
	}

	.title,
	.step-title {
		font-family: var(--font-display);
		color: var(--text-strong);
		margin: 0;
	}

	.title {
		font-size: var(--text-4xl);
		margin-bottom: var(--space-4);
	}

	.intro,
	.copy {
		margin: 0 0 var(--space-4);
		line-height: 1.5;
	}

	.attempts {
		font-size: var(--text-sm);
		margin: 0 0 var(--space-4);
		color: var(--text-muted);
	}

	.warning {
		margin: 0 0 var(--space-5);
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-lg);
		background: color-mix(in srgb, var(--color-warning) 20%, var(--color-surface));
		color: var(--text-strong);
	}

	.block {
		border-top: 1px solid var(--border);
		padding-top: var(--space-5);
	}

	.step-title {
		font-size: var(--text-2xl);
		margin-bottom: var(--space-3);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-bottom: var(--space-4);
	}

	button {
		border: 0;
		cursor: pointer;
		font-family: var(--font-body);
		transition:
			transform var(--duration-fast) var(--ease-standard),
			filter var(--duration-fast) var(--ease-standard);
	}

	button:hover {
		filter: brightness(1.06);
	}

	button:active {
		transform: scale(0.97);
	}

	button:focus-visible {
		outline: none;
		box-shadow: var(--shadow-focus);
	}

	.primary,
	.secondary {
		border-radius: var(--radius-pill);
		padding: var(--space-3) var(--space-5);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
	}

	.primary {
		background: var(--color-primary);
		color: var(--color-surface);
	}

	.secondary {
		background: color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
		color: var(--text-strong);
		border: 1px solid var(--border);
	}

	.deceptive-link {
		background: transparent;
		color: var(--text-muted);
		font-size: var(--text-xs);
		text-decoration: underline;
		text-underline-offset: 3px;
		padding: 0;
	}

	.education .title {
		margin-bottom: var(--space-5);
	}

	.list {
		margin: 0 0 var(--space-5);
		padding-left: var(--space-5);
	}

	.list li {
		margin-bottom: var(--space-2);
		line-height: 1.5;
	}
</style>
