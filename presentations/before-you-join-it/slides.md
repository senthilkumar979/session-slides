---
theme: default
title: Before You Join IT — Build Your Professional Toolset
info: |
  What professional engineering looks like beyond writing code — workflows, collaboration, and the tools that support them.
author: MentorBridge
website: https://mentorbridge.in/
category: non-technical
tags: [career, workflow, github, collaboration, engineering]
duration: 60m
level: beginner
colorSchema: light
highlighter: shiki
transition: fade-out
mdc: true
fonts:
  sans: DM Sans
  mono: JetBrains Mono
---

<!--
Opening. Frame the session: not a tool tutorial — a map of how professional work happens.
Ask who has contributed to a shared repo with a PR review.
-->

<div class="mb-cover absolute inset-0" />

<div class="relative h-full flex flex-col justify-between py-1">
  <BrandLogo />

  <div>
    <p class="mb-kicker !mb-3">MentorBridge Session</p>
    <h1 class="!text-[2.2rem] !mb-2">
      Before You Join IT<br />
      <span class="mb-pink">Build Your Professional Toolset</span>
    </h1>
    <div class="mb-rule mb-3" />
    <p class="mb-lead">
      From writing code to working like a professional engineer —
      the workflows companies expect, and the tools that support them.
    </p>
  </div>

  <div class="flex items-center justify-between text-sm mb-muted">
    <span>Final-year students · Fresh graduates · Early-career developers</span>
    <span>mentorbridge.in</span>
  </div>
</div>

---

<!--
Set expectations clearly. Avoid "learn 20 tools" framing.
-->

# What this session is

<div class="mb-two mt-3">
  <div class="mb-card-pink">
    <div class="mb-kicker">This is</div>
    <ul class="mb-list">
      <li>How professional engineering <strong>actually works</strong></li>
      <li>The workflows behind shipping software in a team</li>
      <li>Why tools exist — and what problem each solves</li>
      <li>A map you can explore at your own pace</li>
    </ul>
  </div>
  <div class="mb-card">
    <div class="mb-kicker">This is not</div>
    <ul class="mb-list">
      <li>Mastering 15 products in one hour</li>
      <li>A vendor pitch or certification checklist</li>
      <li>A homework plan with weekly deadlines</li>
      <li>Motivation without substance</li>
    </ul>
  </div>
</div>

<div class="mb-callout mt-4">
  Goal: leave knowing <em>how organizations work</em> — not just how to write functions.
</div>

<SessionFooter />

---
layout: center
class: text-center
---

<!--
Click through slowly. After "Can you code?", most hands go up. After the rest, fewer.
That gap is the session thesis.
-->

<p class="mb-kicker">Start here</p>

# Can you code?

<div class="mt-4 space-y-1.5 text-base font-semibold mb-slate">
  <p v-click>Can you collaborate on the same codebase safely?</p>
  <p v-click>Can you make your work visible to a team?</p>
  <p v-click>Can you review someone else's change?</p>
  <p v-click>Can you ship something live for others to use?</p>
  <p v-click>Can you document decisions so they survive you?</p>
  <p v-click>Can you update stakeholders clearly?</p>
</div>

<p v-click class="mt-5 text-xl font-bold mb-pink">
  That gap is professional engineering.
</p>

---

<!--
Concrete comparison. Spend time on the right column — each row is a real company habit.
-->

# College work vs industry work

<div class="mt-2">
  <Comparison
    left-title="Typical college project"
    right-title="Typical IT team"
    :left-items="[
      'One laptop, local folders',
      'Tasks remembered or in chat',
      'Run it on my machine',
      'WhatsApp for coordination',
      'Docs optional / last minute',
      'Success = demo day',
    ]"
    :right-items="[
      'Shared Git repository',
      'Tickets with owner + status',
      'CI checks + hosted environments',
      'Pull requests + written updates',
      'Living docs and decisions',
      'Success = reliable in production',
    ]"
  />
</div>

<div class="mb-callout mt-3">
  Languages may be the same. The operating system of work is different.
</div>

<SessionFooter />

---

<!--
The spine of the talk. Tools under stages are examples, not requirements.
-->

# How work moves in a real team

<div class="mt-5 space-y-3">
  <Workflow
    :steps="[
      { label: 'Plan', note: 'Jira · Trello' },
      { label: 'Build', note: 'GitHub · GitLab' },
      { label: 'Review', note: 'Pull Request' },
      { label: 'Test', note: 'CI checks' },
      { label: 'Deploy', note: 'Vercel · cloud' },
    ]"
  />
  <Workflow
    :steps="[
      { label: 'Document', note: 'Notion · Docs' },
      { label: 'Communicate', note: 'Email · Chat' },
      { label: 'Schedule', note: 'Calendar' },
      { label: 'Analyze', note: 'Sheets · Excel' },
      { label: 'Present', note: 'Slides · PPT' },
    ]"
  />
</div>

<div class="mb-callout mt-4">
  Products change every few years. These stages almost never do.
</div>

<SessionFooter />

---

<!--
Capability map — five domains. Rest of deck expands each.
-->

# Five capabilities beyond coding

<div class="mb-three mt-3">
  <div class="mb-card">
    <div class="text-lg font-bold mb-pink mb-1">01</div>
    <h3 class="!mt-0 !mb-1 !text-base">Delivery</h3>
    <p class="!m-0 text-xs mb-muted">Version control, review, and shipping to a URL others can open.</p>
  </div>
  <div class="mb-card">
    <div class="text-lg font-bold mb-pink mb-1">02</div>
    <h3 class="!mt-0 !mb-1 !text-base">Execution</h3>
    <p class="!m-0 text-xs mb-muted">Making work visible: ownership, priority, status, history.</p>
  </div>
  <div class="mb-card">
    <div class="text-lg font-bold mb-pink mb-1">03</div>
    <h3 class="!mt-0 !mb-1 !text-base">Knowledge</h3>
    <p class="!m-0 text-xs mb-muted">Externalizing decisions, notes, and how systems work.</p>
  </div>
  <div class="mb-card">
    <div class="text-lg font-bold mb-pink mb-1">04</div>
    <h3 class="!mt-0 !mb-1 !text-base">Communication</h3>
    <p class="!m-0 text-xs mb-muted">Outlook: meetings, notes, mail, signature, tracking.</p>
  </div>
  <div class="mb-card">
    <div class="text-lg font-bold mb-pink mb-1">05</div>
    <h3 class="!mt-0 !mb-1 !text-base">Office fluency</h3>
    <p class="!m-0 text-xs mb-muted">Excel formulas and PowerPoint storytelling.</p>
  </div>
  <div class="mb-card-pink flex items-center">
    <p class="!m-0 text-xs font-semibold">
      You don't need every tool.<br />
      You need the <span class="mb-pink">mental model</span> behind each category.
    </p>
  </div>
</div>

<SessionFooter />

---

<SectionDivider
  number="01"
  title="Delivery"
  subtitle="Where code lives after you write it — Git, review, and going live."
/>

---

<!--
Explain lifecycle. Emphasize: commit ≠ done.
-->

# After you write the code

<div class="mt-5">
  <Workflow
    :steps="[
      { label: 'Edit' },
      { label: 'Commit' },
      { label: 'Push' },
      { label: 'Pull Request' },
      { label: 'Review' },
      { label: 'Merge' },
      { label: 'Deploy' },
    ]"
  />
</div>

<div class="mb-two mt-4">
  <div class="mb-card">
    <div class="mb-kicker mb-2">Common platforms</div>
    <ul class="mb-list text-sm">
      <li><strong>GitHub / GitLab</strong> — source of truth for code</li>
      <li><strong>Pull requests</strong> — propose + discuss change</li>
      <li><strong>Vercel / similar</strong> — preview and production URLs</li>
      <li><strong>Gists</strong> — share small snippets quickly</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker mb-2">What juniors often miss</div>
    <p class="!m-0 text-sm mb-slate leading-relaxed">
      In industry, “I finished coding” is mid-pipeline.
      Done usually means <strong>reviewed, merged, and running somewhere others can verify</strong>.
    </p>
  </div>
</div>

<SessionFooter />

---

<!--
Practical Git hygiene with a realistic example.
-->

# The team workflow on Git

<div class="mb-two mt-5 items-start">
  <div class="space-y-1 text-base font-semibold leading-relaxed">
    <div>1. Ticket / issue describes the work</div>
    <div class="mb-pink">↓</div>
    <div>2. Branch from <code>main</code></div>
    <div class="mb-pink">↓</div>
    <div>3. Small, clear commits</div>
    <div class="mb-pink">↓</div>
    <div>4. Open a pull request</div>
    <div class="mb-pink">↓</div>
    <div>5. Address review comments</div>
    <div class="mb-pink">↓</div>
    <div>6. Merge → deploy</div>
  </div>

  <div class="mb-mono">
<span class="mb-pink"># branch</span><br/>
git switch -c feature/login-validation<br/><br/>
<span class="mb-pink"># commit</span><br/>
git commit -m "Add login validation"<br/><br/>
<span class="mb-pink"># share</span><br/>
git push -u origin feature/login-validation
  </div>
</div>

<p class="mt-5 text-sm mb-muted">
  Naming tip: branch and PR describe <em>intent</em> — not “final” or “fixes”.
</p>

<SessionFooter />

---

<!--
Why PRs exist — social + technical control.
-->

# Why pull requests matter

<div class="mb-three mt-6">
  <div class="mb-card">
    <h3 class="!mt-0 !text-base">Quality</h3>
    <p class="!m-0 text-sm mb-muted">Second pair of eyes catches bugs, edge cases, and unclear naming before users see them.</p>
  </div>
  <div class="mb-card">
    <h3 class="!mt-0 !text-base">Shared ownership</h3>
    <p class="!m-0 text-sm mb-muted">Knowledge spreads. The team can maintain the change when you're on leave.</p>
  </div>
  <div class="mb-card">
    <h3 class="!mt-0 !text-base">Traceability</h3>
    <p class="!m-0 text-sm mb-muted">Discussion, decisions, and CI results stay attached to the change forever.</p>
  </div>
</div>

<div class="mb-callout mt-4">
  A PR is not bureaucracy. It is how teams change production without chaos.
</div>

<SessionFooter />

---

<!--
Deployment concept.
-->

# Shipping: code that others can open

<div class="mb-two mt-6">
  <div class="mb-card space-y-2 text-center font-semibold">
    <div>Repository</div>
    <div class="mb-pink">↓</div>
    <div>Build</div>
    <div class="mb-pink">↓</div>
    <div>Preview URL</div>
    <div class="mb-pink">↓</div>
    <div class="mb-pink">Production URL</div>
    <p class="!mb-0 !mt-4 text-sm font-normal mb-muted">Example: Vercel ↔ GitHub</p>
  </div>
  <div class="space-y-3">
    <div class="mb-card">
      <strong>On GitHub alone</strong>
      <p class="!mb-0 !mt-1 text-sm mb-muted">Source exists. Stakeholders still ask “where do I click?”</p>
    </div>
    <div class="mb-card-pink">
      <strong>With a live URL</strong>
      <p class="!mb-0 !mt-1 text-sm mb-slate">Mentors, teammates, and interviewers can use what you built.</p>
    </div>
    <div class="mb-callout">
      Treat “shareable link” as part of finishing work — not an optional extra.
    </div>
  </div>
</div>

<SessionFooter />

---

<!--
Concrete practice signals — optional, self-paced.
-->

# What “experience” looks like here

<div class="mb-card mt-5">
  <div class="mb-kicker mb-3">Worth practicing on any small project</div>
  <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm mb-slate">
    <div>✓ Shared repository (not zip files)</div>
    <div>✓ README that explains how to run it</div>
    <div>✓ At least one issue describing work</div>
    <div>✓ Feature branch + meaningful commits</div>
    <div>✓ Pull request reviewed by a peer</div>
    <div>✓ Deployed preview or production URL</div>
  </div>
</div>

<p class="mt-4 mb-lead">
  The skill is not “knowing GitHub’s UI”.
  The skill is <strong class="mb-pink">collaborating on change with a clear history</strong>.
</p>

<SessionFooter />

---

<SectionDivider
  number="02"
  title="Execution"
  subtitle="If work isn’t visible, for the team it barely exists."
/>

---

<!--
Kanban mental model.
-->

# Make work visible

<div class="mt-5">
  <Workflow
    :steps="[
      { label: 'Backlog' },
      { label: 'To do' },
      { label: 'In progress' },
      { label: 'Review' },
      { label: 'Done' },
    ]"
  />
</div>

<div class="mb-three mt-4">
  <div class="mb-card text-center">
    <div class="font-bold mb-pink text-lg">Owner</div>
    <p class="!m-0 text-sm mb-muted">Who is accountable?</p>
  </div>
  <div class="mb-card text-center">
    <div class="font-bold mb-pink text-lg">Status</div>
    <p class="!m-0 text-sm mb-muted">Where is it stuck?</p>
  </div>
  <div class="mb-card text-center">
    <div class="font-bold mb-pink text-lg">Context</div>
    <p class="!m-0 text-sm mb-muted">Why + acceptance criteria</p>
  </div>
</div>

<div class="mb-callout mt-4">
  “I’m busy” is not a status. A ticket with state is.
</div>

<SessionFooter />

---

<!--
Jira-style hierarchy as concepts.
-->

# How teams break down work

<div class="mb-two mt-5">
  <div class="space-y-2">
    <div class="mb-card font-bold">Epic — larger outcome</div>
    <div class="text-center mb-pink">↓</div>
    <div class="mb-card font-bold ml-4">Story — user-visible slice</div>
    <div class="text-center mb-pink">↓</div>
    <div class="mb-card font-bold ml-8">Task / sub-task — concrete work</div>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker mb-3">A useful ticket usually has</div>
    <ul class="mb-list text-sm">
      <li>Clear title and problem statement</li>
      <li>Assignee and priority</li>
      <li>Acceptance criteria (“done means…”)</li>
      <li>Links to designs, PRs, or docs</li>
      <li>Comments that capture decisions</li>
    </ul>
    <p class="!mb-0 !mt-4 text-sm mb-slate">
      Tools: <strong>Jira</strong> (structured teams), <strong>Trello</strong> (lightweight boards).
    </p>
  </div>
</div>

<SessionFooter />

---

<!--
Team board vs personal task list.
-->

# Team board vs personal list

<div class="mt-4">
  <Comparison
    left-title="Team board (e.g. Trello / Jira)"
    right-title="Personal list (e.g. Todoist)"
    :left-items="[
      'Shared visibility',
      'Columns mirror workflow',
      'Handoffs between people',
      'Sprint / release planning',
      'WIP limits reduce thrash',
    ]"
    :right-items="[
      'Your daily execution',
      'Reminders and due dates',
      'Recurring habits',
      'Prep before meetings',
      'Follow-ups you own alone',
    ]"
  />
</div>

<div class="mb-callout mt-6">
  Teams need a board. You still need personal discipline — they solve different problems.
</div>

<SessionFooter />

---

<!--
Capture physical knowledge.
-->

# Capture what happens off-screen

<div class="mt-6">
  <Workflow
    :steps="[
      { label: 'Whiteboard' },
      { label: 'Capture' },
      { label: 'Scan / PDF' },
      { label: 'Shared drive' },
      { label: 'Team memory' },
    ]"
  />
</div>

<div class="mb-two mt-4">
  <div class="mb-card">
    <div class="mb-kicker mb-2">Typical sources</div>
    <ul class="mb-list text-sm">
      <li>Architecture sketches</li>
      <li>Workshop notes</li>
      <li>Handwritten decisions</li>
      <li>Interview whiteboard rounds (for practice)</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <p class="!m-0 text-sm mb-slate leading-relaxed">
      Phone photos in a private gallery help <em>you</em> for a week.
      A named PDF in Drive/OneDrive helps the <strong>team</strong> for months.
      Tools like Adobe Scan exist for this handoff.
    </p>
  </div>
</div>

<SessionFooter />

---

<SectionDivider
  number="03"
  title="Knowledge"
  subtitle="Your brain is for thinking — not for being the only database."
/>

---

<!--
Second brain / docs.
-->

# Externalize project knowledge

<div class="mb-two mt-5">
  <div class="mb-mono text-sm">
project/<br/>
├── overview.md<br/>
├── architecture.md<br/>
├── decisions/<br/>
├── meeting-notes/<br/>
├── runbooks/<br/>
└── how-to-run.md
  </div>
  <div>
    <p class="mb-lead !text-base !max-w-none">
      When someone asks “why did we choose X?”, the answer should not depend on who is online on chat.
    </p>
    <div class="mb-card mt-4">
      <div class="mb-kicker mb-2">Common tools</div>
      <p class="!m-0 text-sm mb-slate">
        <strong>Notion</strong> — wikis, databases, trackers<br />
        <strong>Craft / Docs / Word</strong> — narrative documents<br />
        Pick for structure — the habit matters more than the brand.
      </p>
    </div>
  </div>
</div>

<SessionFooter />

---

<!--
What good docs contain.
-->

# Documentation that teams actually use

<div class="mb-three mt-6">
  <div class="mb-card">
    <h3 class="!mt-0 !text-base">Decisions</h3>
    <p class="!m-0 text-sm mb-muted">What we chose, alternatives rejected, and why — dated.</p>
  </div>
  <div class="mb-card">
    <h3 class="!mt-0 !text-base">How to run</h3>
    <p class="!m-0 text-sm mb-muted">Setup steps a teammate can follow without pinging you.</p>
  </div>
  <div class="mb-card">
    <h3 class="!mt-0 !text-base">Runbooks</h3>
    <p class="!m-0 text-sm mb-muted">When X breaks, do A → B → C.</p>
  </div>
</div>

<div class="mb-callout mt-4">
  Write for the next reader — including future you in three months.
</div>

<SessionFooter />

---

<SectionDivider
  number="04"
  title="Communication"
  subtitle="Outlook skills companies assume you already have."
/>

---

<!--
Why communication tools matter before the first job.
-->

# Why this matters at work

<div class="mb-three mt-3">
  <div class="mb-card-pink">
    <div class="mb-kicker">Visibility</div>
    <p class="!m-0 text-sm mb-slate">Managers can't support work they can't see. Calendar + email make progress real.</p>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker">Trust</div>
    <p class="!m-0 text-sm mb-slate">Clear invites, notes, and follow-ups signal reliability — not just coding skill.</p>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker">Speed</div>
    <p class="!m-0 text-sm mb-slate">Good written habits reduce meetings, rework, and “what did we decide?” loops.</p>
  </div>
</div>

<div class="mb-callout mt-4">
  In most IT companies, day-one coordination happens in <strong>Outlook</strong> (mail + calendar) — often before you touch the codebase.
</div>

<SessionFooter />

---

<!--
Outlook calendar / meetings.
-->

# Outlook · Schedule meetings like a professional

<div class="mb-two mt-3">
  <div class="mb-card">
    <div class="mb-kicker">Practice</div>
    <ul class="mb-list">
      <li>Create a calendar event with agenda in the body</li>
      <li>Add required vs optional attendees</li>
      <li>Attach docs / ticket links before sending</li>
      <li>Set a reminder and a clear end time</li>
      <li>Send updates when time or scope changes</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker">Significance</div>
    <ul class="mb-list">
      <li>Protects other people's time</li>
      <li>Creates a shared record of when work happens</li>
      <li>Forces clarity: purpose, owner, outcome</li>
      <li>Cross-timezone teams depend on calendar truth</li>
      <li>“Can you set up a sync?” is a common junior task</li>
    </ul>
  </div>
</div>

<SessionFooter />

---

<!--
Meeting notes.
-->

# Outlook / OneNote · Take notes that survive the meeting

<div class="mb-two mt-3">
  <div class="mb-card">
    <div class="mb-kicker">Practice</div>
    <ul class="mb-list">
      <li>Capture decisions, not every spoken word</li>
      <li>List action items with <strong>owner + due date</strong></li>
      <li>Store notes where the team can find them</li>
      <li>Send a short recap mail after important meetings</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker">Significance</div>
    <ul class="mb-list">
      <li>Memory is unreliable across a team</li>
      <li>Notes prevent repeated debates</li>
      <li>Action items turn talk into delivery</li>
      <li>New joiners can catch up from written history</li>
    </ul>
  </div>
</div>

<div class="mb-callout mt-3">
  Template: Context → Decisions → Actions (who / what / when) → Open questions
</div>

<SessionFooter />

---

<!--
Email + signature + tracking.
-->

# Outlook · Mail, signature, and tracking

<div class="mb-three mt-3">
  <div class="mb-card">
    <div class="mb-kicker">Write clearly</div>
    <ul class="mb-list text-xs">
      <li>Subject states the ask</li>
      <li>Context in 2–3 lines</li>
      <li>Action + owner + deadline</li>
      <li>Links / evidence at the end</li>
    </ul>
  </div>
  <div class="mb-card">
    <div class="mb-kicker">Mail signature</div>
    <ul class="mb-list text-xs">
      <li>Name · role · team</li>
      <li>Phone / time zone</li>
      <li>Company + professional link</li>
      <li>Keep it short — no clutter</li>
    </ul>
  </div>
  <div class="mb-card">
    <div class="mb-kicker">Track mails</div>
    <ul class="mb-list text-xs">
      <li>Folders / categories</li>
      <li>Flags & follow-up dates</li>
      <li>Rules for noisy threads</li>
      <li>Pin / search instead of scrolling</li>
    </ul>
  </div>
</div>

<div class="mb-callout mt-3">
  <strong>Significance:</strong> Your inbox is a work queue. Signature builds identity; tracking prevents dropped asks; clear mail reduces status meetings.
</div>

<SessionFooter />

---

<!--
Bad vs good email example — keep compact.
-->

# Weak mail vs professional mail

<div class="mb-two mt-3">
  <div class="mb-card mb-bad text-sm">
    <strong class="text-[var(--mb-warn)]">Weak</strong><br />
    Hi, there is an issue. Please check.
  </div>
  <div class="mb-card mb-good text-sm">
    <strong class="text-[var(--mb-ok)]">Clear</strong><br />
    <em>Subject:</em> Login validation failing on staging — review needed by Fri 5pm<br /><br />
    Context: invalid password path returns 500.<br />
    Ask: please review PR #42.<br />
    Link: …/pull/42
  </div>
</div>

<div class="mb-card-pink mt-3 text-sm">
  Practice in Outlook: send this style of mail to a peer, flag it for Friday, and file the thread under a project category.
</div>

<SessionFooter />

---

<SectionDivider
  number="05"
  title="Office fluency"
  subtitle="Excel and PowerPoint — how engineers share numbers and stories."
/>

---

<!--
Why office tools matter for engineers.
-->

# Developers still live in Office tools

<div class="mb-two mt-3">
  <div class="mb-card">
    <div class="mb-kicker">You will use them for</div>
    <ul class="mb-list">
      <li>Status reports and stakeholder updates</li>
      <li>Bug lists, checklists, simple metrics</li>
      <li>Architecture / demo walkthroughs</li>
      <li>Interview case studies and project reviews</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker">Significance</div>
    <p class="!m-0 text-sm mb-slate leading-relaxed">
      Code proves you can build.
      <strong>Sheets and decks prove you can explain impact</strong> to people who don't read your pull requests.
    </p>
  </div>
</div>

<div class="mb-callout mt-4">
  Google and Microsoft stacks map 1:1 — practice either; companies often standardize on Microsoft 365.
</div>

<SessionFooter />

---

<!--
Excel formulas practice + significance.
-->

# Excel · Basic formulas every engineer should know

<div class="mb-two mt-3">
  <div class="mb-card">
    <div class="mb-kicker">Practice these</div>
    <ul class="mb-list">
      <li><code>SUM</code> · <code>AVERAGE</code> · <code>COUNT</code></li>
      <li><code>IF</code> for simple rules</li>
      <li><code>VLOOKUP</code> / <code>XLOOKUP</code></li>
      <li>Sort, filter, freeze panes</li>
      <li>Basic chart from a clean table</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker">Significance</div>
    <ul class="mb-list">
      <li>Fast answers before a dashboard exists</li>
      <li>Bug triage & release checklists live in sheets</li>
      <li>Capacity / estimate conversations are numerical</li>
      <li>Shows you can reason with data, not only code</li>
    </ul>
  </div>
</div>

<div class="mb-callout mt-3">
  Mini practice: take any project task list → columns for estimate, actual, status → compute totals and % done with formulas.
</div>

<SessionFooter />

---

<!--
PowerPoint practice + significance.
-->

# PowerPoint · Create decks that get decisions

<div class="mb-two mt-3">
  <div class="mb-card">
    <div class="mb-kicker">Practice</div>
    <ul class="mb-list">
      <li>Build a 5-slide project story</li>
      <li>One idea per slide — large type</li>
      <li>Use a simple visual (flow / before-after)</li>
      <li>End with ask / next steps</li>
      <li>Export PDF for sharing</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker">Significance</div>
    <ul class="mb-list">
      <li>Leaders decide from decks, not repos</li>
      <li>Demos need a narrative spine</li>
      <li>Interviews & reviews reward clear storytelling</li>
      <li>Writing slides clarifies your own thinking</li>
    </ul>
  </div>
</div>

<div class="mt-3">
  <Workflow
    :steps="[
      { label: 'Problem' },
      { label: 'Context' },
      { label: 'Solution' },
      { label: 'Evidence' },
      { label: 'Next steps' },
    ]"
  />
</div>

<SessionFooter />

---

<!--
Compact practice checklist for Office/Outlook cluster.
-->

# Practice checklist · Communication & Office

<div class="mb-two mt-3">
  <div class="mb-card">
    <div class="mb-kicker">Outlook</div>
    <ul class="mb-list text-sm">
      <li>☐ Schedule a meeting with agenda</li>
      <li>☐ Take notes + action owners</li>
      <li>☐ Create a professional signature</li>
      <li>☐ Flag / categorize and follow up a mail</li>
      <li>☐ Send a clear status update</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker">Excel & PowerPoint</div>
    <ul class="mb-list text-sm">
      <li>☐ Sheet with 3+ formulas</li>
      <li>☐ Filter + simple chart</li>
      <li>☐ 5-slide project PPT</li>
      <li>☐ One ask on the last slide</li>
    </ul>
  </div>
</div>

<div class="mb-callout mt-3">
  Do this on a real project of yours — fake demos teach less than your own work explained well.
</div>

<SessionFooter />

---

<!--
Ecosystem recap — informative, not challenge.
-->

# One workflow, many possible tools

<div class="mt-3 grid grid-cols-2 gap-2 text-sm">
  <div class="mb-card flex justify-between gap-3"><strong class="mb-pink">Plan</strong><span class="mb-muted">Jira · Trello</span></div>
  <div class="mb-card flex justify-between gap-3"><strong class="mb-pink">Build</strong><span class="mb-muted">GitHub · GitLab</span></div>
  <div class="mb-card flex justify-between gap-3"><strong class="mb-pink">Review</strong><span class="mb-muted">Pull requests</span></div>
  <div class="mb-card flex justify-between gap-3"><strong class="mb-pink">Deploy</strong><span class="mb-muted">Vercel · cloud hosts</span></div>
  <div class="mb-card flex justify-between gap-3"><strong class="mb-pink">Document</strong><span class="mb-muted">Notion · Docs · Craft</span></div>
  <div class="mb-card flex justify-between gap-3"><strong class="mb-pink">Communicate</strong><span class="mb-muted">Outlook · Calendar · Mail</span></div>
  <div class="mb-card flex justify-between gap-3"><strong class="mb-pink">Analyze</strong><span class="mb-muted">Excel · Sheets</span></div>
  <div class="mb-card flex justify-between gap-3"><strong class="mb-pink">Present</strong><span class="mb-muted">PowerPoint · Slides</span></div>
</div>

<div class="mb-callout mt-3">
  Learn categories and habits. Swap tools when a company asks you to.
</div>

<SessionFooter />

---

<!--
Experience over account collecting.
-->

# Accounts ≠ experience

<div class="mb-two mt-6">
  <div class="mb-card">
    <div class="mb-kicker mb-3">Low signal</div>
    <ul class="mb-list text-sm">
      <li>Signed up for twelve products</li>
      <li>Empty repositories</li>
      <li>Boards with no real tickets</li>
      <li>Docs folders with one blank page</li>
    </ul>
  </div>
  <div class="mb-card-pink">
    <div class="mb-kicker mb-3">High signal</div>
    <ul class="mb-list text-sm">
      <li>A PR someone else reviewed</li>
      <li>A board that reflects real status</li>
      <li>A short decision log</li>
      <li>A live URL + clear README</li>
    </ul>
  </div>
</div>

<p class="mt-4 text-center text-xl font-bold">
  Explore when you're ready.<br />
  <span class="mb-pink">Depth beats collecting logins.</span>
</p>

<SessionFooter />

---

<!--
Readiness as information, not exam.
-->

# Signals of readiness

<div class="mt-2 max-w-3xl">
  <Checklist
    :items="[
      'I can use Git without fear (branch, commit, push)',
      'I understand why pull requests exist',
      'I can put a web app on a shareable URL',
      'I can describe work as tickets with status',
      'I can schedule an Outlook meeting with an agenda',
      'I can write a clear mail + use a professional signature',
      'I can track follow-ups (flags / categories) in Outlook',
      'I can use basic Excel formulas on real project data',
      'I can build a short PowerPoint that ends with an ask',
    ]"
  />
</div>

<p class="mt-2 text-xs mb-muted">Use as a mirror — not a score.</p>

<SessionFooter />

---

<!--
What to carry — portable skills.
-->

# What travels with you

<div class="mb-three mt-6">
  <div class="mb-card text-center font-semibold">Workflow thinking</div>
  <div class="mb-card text-center font-semibold">Collaboration habits</div>
  <div class="mb-card text-center font-semibold">Written clarity</div>
  <div class="mb-card text-center font-semibold">Ownership</div>
  <div class="mb-card text-center font-semibold">Curiosity</div>
  <div class="mb-card-pink text-center font-semibold mb-pink">Learning agility</div>
</div>

<div class="mb-callout mt-5 text-center">
  Tools will be replaced. Your ability to learn the next one should not be.
</div>

<SessionFooter />

---
layout: center
class: text-center
---

<!--
Close on the thesis. Soft CTA: explore at their pace.
-->

<div class="flex justify-center mb-8">
  <BrandLogo />
</div>

# Don't wait for your first company<br />to discover how work happens

<p class="mt-4 mb-lead mx-auto !text-center">
  Coding gets you in the door.<br />
  Professional workflows help you contribute once you're inside.
</p>

<div class="mb-rule mx-auto mt-4 mb-8" />

<p class="mb-kicker">MentorBridge</p>
<p class="text-sm mb-muted mt-2">Guiding your journey to success</p>
<p class="text-sm mt-4">
  <a class="mb-pink font-semibold" href="https://mentorbridge.in/" target="_blank">mentorbridge.in</a>
</p>
