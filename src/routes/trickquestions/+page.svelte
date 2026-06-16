<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { ChevronDown, AlertTriangle, Target, Eye, Brain, Zap } from 'lucide-svelte';

  let expanded: { [key: string]: boolean } = {};

  function toggleExpanded(id: string) {
    expanded[id] = !expanded[id];
  }

  const trickquestions = [
    {
      id: 'ambiguous-copy',
      title: 'Ambiguous Copy',
      description: 'Using vague or misleading language to confuse users about what they are agreeing to.',
      example: '"Continue" button that actually signs you up for a paid service',
      impact: 'Users accidentally commit to unwanted actions',
      solution: 'Use clear, explicit language like "Sign up for Premium ($9.99/month)" or "Subscribe Now"'
    },
    {
      id: 'hidden-options',
      title: 'Hidden Options',
      description: 'Hiding the "no" or cancel option, making it difficult or impossible to opt out.',
      example: 'Only showing "Accept" in large text while "Decline" is tiny or hidden in a menu',
      impact: 'Users cannot easily refuse; forced into unwanted commitments',
      solution: 'Make all options equally prominent and easy to find. Respect user choice equally.'
    },
    {
      id: 'misdirection',
      title: 'Misdirection',
      description: 'Drawing attention away from important information using visual hierarchy and layout tricks.',
      example: 'Highlighting discount price while hiding the fine print about automatic renewal',
      impact: 'Users miss crucial details and make uninformed decisions',
      solution: 'Put important disclaimers in the primary focus area, use consistent visual weight'
    },
    {
      id: 'roach-motel',
      title: 'Roach Motel',
      description: '"You can check out anytime you like, but you can never leave" — easy to sign up, hard to cancel.',
      example: 'Simple signup vs. cancellation hidden in account settings requiring support ticket',
      impact: 'Users are trapped in unwanted subscriptions',
      solution: 'Make cancellation as easy as signup. Provide direct cancel buttons, no paperwork required.'
    },
    {
      id: 'confirmshaming',
      title: 'Confirm Shaming',
      description: 'Using emotionally manipulative button text to shame users into accepting.',
      example: '"No, I hate saving money" vs "Yes, I love better prices"',
      impact: 'Users feel pressured into unwanted choices through social manipulation',
      solution: 'Use neutral button labels: "Accept" / "Decline" or "Yes" / "No"'
    },
    {
      id: 'sneak-into-basket',
      title: 'Sneak into Basket',
      description: 'Adding items to cart without user consent, requiring manual removal.',
      example: 'Flight booking pre-checks insurance, hotel upsell, or baggage fee add-ons',
      impact: 'Users pay for unwanted products; checkout friction increases',
      solution: 'Never pre-check extras. Let users opt-in explicitly and clearly show the impact on total.'
    },
    {
      id: 'forced-continuity',
      title: 'Forced Continuity',
      description: 'Trials that require a payment method, then charge without clear reminder or easy cancellation.',
      example: '"Free trial, just add your card" — surprise charges after trial ends',
      impact: 'Users charged unexpectedly; erodes trust',
      solution: 'Send clear reminders before charges. Make cancellation one-click. Never surprise bill.'
    },
    {
      id: 'hidden-costs',
      title: 'Hidden Costs',
      description: 'Revealing unexpected fees only at the final checkout step.',
      example: "Price shown without tax, shipping, or booking fees until you're committed",
      impact: 'Cart abandonment, frustration, negative reviews',
      solution: 'Show all-inclusive final price early. Transparency builds trust.'
    }
  ];
</script>

<svelte:head>
  <title>Trickquestions – Dark Patterns & Deceptive UX</title>
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Header -->
  <header class="border-b" style="border-color: var(--border)">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg" style="background-color: var(--color-surface)">
            <AlertTriangle size={24} style="color: var(--color-accent)" />
          </div>
          <span class="text-xs font-bold uppercase tracking-wide" style="color: var(--text-muted)">
            Dark Patterns
          </span>
        </div>
        <h1
          class="text-5xl font-bold mb-4 uppercase"
          style="font-family: var(--font-display); color: var(--color-primary); letter-spacing: -0.02em"
        >
          Trickquestions
        </h1>
        <p class="text-lg leading-relaxed" style="color: var(--text-body)">
          Deceptive user interface patterns that trick users into doing things contrary to their
          intentions. Learn to recognize them and build ethical products instead.
        </p>
      </div>
    </div>
  </header>

  <!-- Intro Section -->
  <section class="container mx-auto px-6 py-12">
    <div class="max-w-3xl grid grid-cols-3 gap-6">
      <div>
        <div class="p-3 rounded-lg inline-block mb-3" style="background-color: var(--color-sky); opacity: 0.1">
          <Eye size={20} style="color: var(--color-sky)" />
        </div>
        <h3 class="font-bold mb-2" style="color: var(--text-strong)">What Are They?</h3>
        <p style="color: var(--text-body); font-size: 0.875rem">
          Deliberately deceptive practices designed to trick users into unwanted actions: signing up,
          spending money, sharing data, or canceling difficult.
        </p>
      </div>

      <div>
        <div class="p-3 rounded-lg inline-block mb-3" style="background-color: var(--color-accent); opacity: 0.1">
          <Target size={20} style="color: var(--color-accent)" />
        </div>
        <h3 class="font-bold mb-2" style="color: var(--text-strong)">Why They Exist</h3>
        <p style="color: var(--text-body); font-size: 0.875rem">
          Companies use dark patterns to boost short-term metrics: conversions, signups, revenue.
          They work—but erode trust and create negative user experiences over time.
        </p>
      </div>

      <div>
        <div class="p-3 rounded-lg inline-block mb-3" style="background-color: var(--color-highlight); opacity: 0.1">
          <Brain size={20} style="color: var(--color-highlight)" />
        </div>
        <h3 class="font-bold mb-2" style="color: var(--text-strong)">How to Avoid Them</h3>
        <p style="color: var(--text-body); font-size: 0.875rem">
          Respect user agency. Be transparent. Make cancellation easy. Design for trust, not
          conversion tricks. Ethical design scales better long-term.
        </p>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div
    class="container mx-auto px-6 my-12 h-px"
    style="background: linear-gradient(to right, transparent, var(--border), transparent)"
  ></div>

  <!-- Patterns List -->
  <section class="container mx-auto px-6 pb-12">
    <h2
      class="text-3xl font-bold mb-8 uppercase"
      style="font-family: var(--font-display); color: var(--color-primary)"
    >
      8 Common Dark Patterns
    </h2>

    <div class="space-y-4">
      {#each trickquestions as pattern (pattern.id)}
        <button
          type="button"
          class="rounded-lg border transition-all cursor-pointer text-left w-full"
          style="
            border-color: var(--border);
            background-color: {expanded[pattern.id] ? 'var(--color-surface)' : 'transparent'};
          "
          onclick={() => toggleExpanded(pattern.id)}
        >
          <!-- Header -->
          <div
            class="p-6 flex items-start justify-between gap-4 hover:bg-opacity-50 transition"
            style="background-color: {expanded[pattern.id] ? 'rgba(0, 85, 119, 0.02)' : 'transparent'}"
          >
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2" style="color: var(--text-strong)">
                {pattern.title}
              </h3>
              <p style="color: var(--text-body); font-size: 0.9375rem">
                {pattern.description}
              </p>
            </div>
            <div class="pt-1 flex-shrink-0">
              <ChevronDown
                size={20}
                style="
                  color: var(--color-primary);
                  transform: rotate({expanded[pattern.id] ? 180 : 0}deg);
                  transition: transform 200ms ease;
                "
              />
            </div>
          </div>

          <!-- Details (Expandable) -->
          {#if expanded[pattern.id]}
            <div
              class="border-t px-6 py-6 space-y-6"
              style="border-color: var(--border); background-color: var(--color-surface)"
            >
              <div>
                <h4
                  class="font-bold text-sm uppercase mb-2 tracking-wide"
                  style="color: var(--text-muted)"
                >
                  📋 Real-World Example
                </h4>
                <p
                  class="p-4 rounded-lg"
                  style="background-color: var(--color-bg); color: var(--text-body); border-left: 3px solid var(--color-accent)"
                >
                  {pattern.example}
                </p>
              </div>

              <div>
                <h4
                  class="font-bold text-sm uppercase mb-2 tracking-wide"
                  style="color: var(--text-muted)"
                >
                  ⚠️ Impact on Users
                </h4>
                <p style="color: var(--text-body)">
                  {pattern.impact}
                </p>
              </div>

              <div>
                <h4
                  class="font-bold text-sm uppercase mb-2 tracking-wide"
                  style="color: var(--text-muted)"
                >
                  ✓ Ethical Alternative
                </h4>
                <p
                  class="p-4 rounded-lg"
                  style="background-color: rgba(0, 170, 0, 0.05); color: var(--text-body); border-left: 3px solid var(--color-success)"
                >
                  {pattern.solution}
                </p>
              </div>
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </section>

  <!-- CTA Section -->
  <section class="container mx-auto px-6 py-12">
    <div
      class="rounded-lg p-8 text-center"
      style="background: linear-gradient(135deg, var(--color-sky), var(--color-primary)); color: white"
    >
      <Zap size={32} class="inline-block mb-4" style="opacity: 0.8" />
      <h2 class="text-2xl font-bold mb-3 uppercase" style="font-family: var(--font-display)">
        Build with Trust
      </h2>
      <p class="mb-6 max-w-md mx-auto">
        Every deceptive pattern is replaceable with a clear, respectful alternative. Users reward
        transparency. Design for people, not for conversion tricks.
      </p>
      <a
        href="{base}/"
        class="inline-block px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-transform hover:scale-105"
        style="background-color: white; color: var(--color-primary)"
      >
        Explore More Patterns
      </a>
    </div>
  </section>

  <!-- Footer Note -->
  <footer class="container mx-auto px-6 py-8 text-center text-sm" style="color: var(--text-muted)">
    <p>
      Learn more at <a
        href="https://www.darkpatterns.org"
        target="_blank"
        rel="noopener"
        class="font-bold"
        style="color: var(--color-primary)"
      >
        darkpatterns.org
      </a>
      — Harry Brignull's exhaustive taxonomy of deceptive patterns.
    </p>
  </footer>
</div>

<style>
  :global(body) {
    background-color: white;
  }

  button {
    text-align: left;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>