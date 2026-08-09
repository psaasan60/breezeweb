# AGENTS.md — The Breeze Website

This file contains instructions for AI coding agents working on **The Breeze** website.

The website belongs to the Norwegian band **The Breeze**, a J.J. Cale tribute / cover band.

The primary site maintainer is **Paul**. Paul is comfortable making content and design decisions, but has little or no coding experience.

Agents should therefore optimize not only for good code, but for a development process that is understandable, reversible, and easy for Paul to operate.

# 0. Language

Paul (the user, developer and maintainer of the project) prefers language in Norwegian as much as possible in interactions with agents. He has little coding experience, but is eager to learn!

The project includes a `refs/` folder that includes design ideas, specs and other important documentation. There is no objective to keep that up to date or pushed to the repo, it is mostly local documentation. Use it sparingly!

---

# 1. Core principle

Build the website so that:

> The frontend can be ambitious, while everyday maintenance remains simple.

Do not introduce technical complexity unless it solves a real problem.

Prefer the simplest implementation that is:

* reliable
* easy to understand
* easy to maintain
* easy to undo
* visually strong
* mobile friendly

Avoid clever architecture for its own sake.

---

# 2. Technology

The preferred stack is:

* Astro
* Tailwind CSS
* TypeScript where useful
* Git / GitHub
* Netlify
* A simple headless CMS for editable content

Do not introduce additional frameworks or major dependencies unless there is a clear reason.

In particular, avoid adding React, Vue, databases, state-management libraries, authentication systems, or large JavaScript packages unless the requested feature genuinely requires them.

Astro components and normal HTML/CSS should be the default.

---

# 3. The maintainer is not a developer

Paul should never be expected to understand:

* npm internals
* Git internals
* build pipelines
* environment configuration
* TypeScript errors
* dependency resolution
* command-line troubleshooting
* Astro internals

When explaining work to Paul:

* use plain language
* explain what changed and why
* avoid unnecessary technical terminology
* give concrete instructions
* keep required manual steps to a minimum

Prefer:

> “I changed the concert card so the date is easier to see on mobile.”

Instead of:

> “I refactored the responsive flex container and modified the breakpoint utility hierarchy.”

Technical detail can be provided when useful, but should not be the default.

---

# 4. Do the work instead of delegating it

If the agent has access to the project files, it should edit the files directly.

Do not tell Paul to manually:

* copy code between files
* locate code snippets
* edit JSON
* change imports
* fix indentation
* run migrations
* update dependency versions

unless there is genuinely no safe way for the agent to do it.

The preferred workflow is:

1. inspect the project
2. identify the relevant files
3. make the changes
4. run checks
5. explain the result

---

# 5. Make changes in small, safe steps

Avoid large uncontrolled rewrites.

Before changing an established part of the site, understand how it currently works.

Prefer modifying existing components over replacing entire systems.

For larger changes:

1. inspect the relevant files
2. describe the intended approach briefly
3. implement the smallest useful version
4. verify it works
5. refine if needed

Do not rewrite unrelated code.

Do not “clean up” working areas unless the cleanup is relevant to the requested task.

---

# 6. Preserve working functionality

Never intentionally break an existing feature to simplify implementation.

Before finishing a task, check that important existing functionality still works.

At minimum consider:

* navigation
* mobile layout
* concert listings
* booking links
* images
* video embeds
* contact information
* external links

If a requested change risks breaking another feature, warn about that before making a destructive change.

---

# 7. Design direction

The Breeze website should feel atmospheric, musical, understated and authentic.

The design direction is:

* dark
* warm
* photographic
* Americana
* blues / roots influenced
* subtly western
* mature
* uncluttered

The site should evoke the atmosphere of J.J. Cale and The Breeze without becoming a western-themed novelty website.

A useful rule is:

> Americana character, not cowboy theme park.

---

# 8. Colour direction

Preferred visual palette:

* charcoal / near-black backgrounds
* deep burgundy / dark red accents
* warm ivory / off-white text
* subdued warm greys

Avoid:

* bright primary colours
* overly saturated red
* cold corporate blue
* excessive gradients
* many competing accent colours

Maintain strong contrast and readability.

Accessibility should take priority over decorative styling.

---

# 9. Typography

Use typography with clear roles.

Display typography may have western / Americana character.

Body text and interface text should remain simple and highly readable.

Do not use decorative fonts for:

* long paragraphs
* form inputs
* concert details
* navigation
* small mobile text

The display font should provide personality, not reduce usability.

---

# 10. Photography

Photography is one of the strongest elements of the site.

Prefer:

* large live photos
* strong full-width imagery
* authentic band photography
* images showing atmosphere and musicianship

Avoid layouts containing many small decorative images when one strong image would work better.

Do not crop important faces, instruments or band members carelessly.

Always inspect important image crops on both desktop and mobile.

---

# 11. Homepage priorities

The homepage should quickly answer:

1. Who are The Breeze?
2. What do they sound like?
3. Where are they playing next?
4. How can I hear or watch them?
5. How can I book them?

Do not overload the homepage with secondary information.

The primary calls to action should normally relate to:

* upcoming concerts
* listening / watching
* booking

---

# 12. Booking is a primary business goal

The website serves both audiences:

* people who want to see The Breeze
* people who may want to book The Breeze

Booking information should therefore never be hidden deep in the site.

A promoter should quickly be able to find:

* band description
* live video
* good photographs
* upcoming / previous venues
* reviews or press quotes
* contact information

Future promoter resources may include:

* press photos
* logo files
* biography
* technical rider
* stage plot
* promotional text

Design components with this future expansion in mind, but do not build features before they are needed.

---

# 13. Concert content

Concerts should be treated as structured content.

A concert should ideally contain fields such as:

* title
* date
* venue
* city
* country
* start time
* ticket URL
* venue URL
* image
* status
* optional description

The frontend should automatically determine whether a concert is upcoming or past where practical.

Do not require Paul to manually move old concerts into archive sections.

---

# 14. CMS and content editing

Paul's everyday website work should happen through a simple CMS rather than source code.

Typical CMS tasks should include:

* add concert
* edit concert
* upload image
* add video
* edit band biography
* edit member information
* update booking details
* add press quote

When designing CMS schemas, use field names that make sense to a non-developer.

Prefer:

> Concert date

rather than:

> eventDateISO

Prefer:

> Ticket link

rather than:

> externalTicketUri

Use helpful field descriptions where appropriate.

---

# 15. Mobile first

Assume many visitors arrive from:

* Facebook
* Instagram
* concert listings
* QR codes
* shared links

Most of those visitors may be using phones.

Every important feature must work well on a small screen.

Always check:

* navigation
* hero text
* buttons
* concert cards
* forms
* image crops
* headings
* embedded video
* booking contact information

Avoid designs that only look good on large desktop screens.

---

# 16. Keep interaction simple

Avoid unnecessary:

* sliders
* carousels
* popups
* autoplay
* complicated animations
* hidden navigation
* hover-only interactions

Subtle transitions are fine.

Animation should support the atmosphere, not call attention to itself.

Important actions should remain obvious without requiring animation or interaction.

---

# 17. Performance

The website should remain fast.

Prefer:

* Astro static rendering
* optimized images
* lazy loading where appropriate
* minimal JavaScript
* lightweight components

Avoid large client-side libraries for features that can be implemented with HTML, CSS or a small amount of JavaScript.

Do not sacrifice image quality unnecessarily, but serve appropriately sized images.

---

# 18. Accessibility

Use semantic HTML.

Include:

* proper heading hierarchy
* descriptive alt text
* keyboard-accessible navigation
* visible focus states
* sufficient colour contrast
* accessible button and link labels

Do not rely only on colour to communicate meaning.

Buttons must behave like buttons.

Links must behave like links.

---

# 19. Component design

Prefer small reusable components with clear purposes.

Examples:

* Header
* Footer
* Hero
* SectionHeading
* ConcertCard
* ConcertList
* BandMember
* PressQuote
* VideoEmbed
* BookingCTA
* Button

Avoid creating abstractions simply to reduce line count.

A component should exist because it makes the site easier to understand or maintain.

---

# 20. Naming

Use names that describe what something means on the website.

Good:

* `ConcertCard.astro`
* `BookingCTA.astro`
* `BandMember.astro`

Avoid vague names such as:

* `ContentBlock2.astro`
* `NewSection.astro`
* `ComponentFinal.astro`

Do not create filenames with terms such as:

* final
* final2
* newest
* test2
* fixed-version

Use Git for version history instead.

---

# 21. File organization

Keep the project structure predictable.

A preferred general structure is:

```text
src/
  components/
  layouts/
  pages/
  content/
  styles/

public/
  images/
  fonts/
  media/
```

If a CMS is introduced, adapt the structure as needed while keeping responsibilities obvious.

Do not scatter related files throughout the project without reason.

---

# 22. Tailwind usage

Tailwind should support a consistent design system.

Avoid turning every component into a long collection of arbitrary styling decisions.

Prefer shared tokens for:

* colours
* typography
* spacing
* borders
* content widths

When a design pattern appears repeatedly, consider creating a reusable component or style.

Do not introduce unnecessary custom CSS when Tailwind already expresses the design clearly.

Do not force Tailwind onto something that is clearer with a small amount of ordinary CSS.

---

# 23. JavaScript

Use as little client-side JavaScript as practical.

Before introducing JavaScript, ask:

> Can this be done with Astro, HTML or CSS?

Interactive islands are appropriate when real interaction is required.

Do not make the whole site client-rendered because one component needs interactivity.

---

# 24. Dependencies

Every added dependency becomes a maintenance responsibility.

Before installing a package, consider whether the same result can be achieved simply within the existing stack.

Do not install a package for trivial tasks.

When adding a dependency:

* choose actively maintained packages
* use the current stable version
* explain why it is needed
* avoid overlapping packages that solve the same problem

---

# 25. Error handling

If something fails:

1. inspect the actual error
2. identify the likely cause
3. attempt the safest fix
4. verify the fix
5. explain the outcome simply

Do not overwhelm Paul with raw terminal output unless it is genuinely useful.

Summarize errors in plain language.

Example:

> The build failed because the concert image filename no longer matched the file on disk. I corrected the reference and the build now succeeds.

---

# 26. Testing before completion

Before declaring a development task finished, run the relevant checks.

Typically:

* development build
* production build
* Astro / TypeScript checks if configured
* relevant linting if configured

Also inspect the actual result.

A passing build does not guarantee a good website.

For visual changes, review both:

* desktop
* mobile

---

# 27. Git practices

Git is the project's safety system.

Prefer small meaningful commits.

Commit messages should describe the user-visible change.

Good:

```text
Improve mobile concert cards
Add booking section to homepage
Fix band image crop on small screens
```

Avoid:

```text
stuff
changes
fix
final
```

Do not force-push, rewrite shared history, delete branches, or perform destructive Git operations unless explicitly requested and clearly understood.

---

# 28. Deployment

Production should normally deploy automatically from GitHub through Netlify.

Do not manually upload individual site files to production as the normal workflow.

The preferred flow is:

```text
Edit locally
↓
Test locally
↓
Commit
↓
Push to GitHub
↓
Netlify builds
↓
Production
```

If deployment fails, diagnose the build rather than bypassing the deployment workflow.

---

# 29. Environment variables and secrets

Never put passwords, API keys, tokens or private credentials into:

* source files
* commits
* screenshots
* documentation
* chat messages

Use environment variables and the hosting provider's secret management.

Never expose CMS admin credentials in frontend code.

---

# 30. Before making major architectural changes

Do not replace major parts of the stack without a strong reason.

Examples include changing:

* Astro
* Tailwind
* CMS
* hosting provider
* routing structure
* content architecture

Before doing so:

1. explain the problem with the current solution
2. explain the proposed replacement
3. identify migration risks
4. preserve content
5. preserve rollback capability

Architectural novelty is not a goal.

Maintainability is.

---

# 31. Communicating with Paul

When finishing work, give Paul a short summary.

Prefer this format:

**What changed**

Explain the visible result.

**What you need to do**

Usually this should be nothing.

If action is required, give very clear steps.

**Status**

State whether the site builds correctly and whether the change is ready to publish.

Avoid long technical reports unless Paul asks for them.

---

# 32. When unsure

If the design intention is unclear, prefer consistency with the existing site rather than inventing a new direction.

If several technical approaches are possible, prefer the least complex approach that meets the requirement.

If a decision could significantly affect the look, structure or maintenance of the site, explain the options before making a difficult-to-reverse change.

For small reversible choices, make a sensible decision and proceed.

---

# 33. Things agents should actively avoid

Do not:

* redesign unrelated parts of the site
* introduce unnecessary frameworks
* add dependencies casually
* build a CMS from scratch without strong reason
* expose credentials
* break mobile layouts
* hide booking information
* use placeholder copy in production without mentioning it
* replace authentic photography with generic stock imagery
* create excessive animation
* make Paul edit source code for ordinary content
* leave known build errors unresolved
* claim something works without checking it
* create manual production upload workflows
* over-engineer simple features

---

# 34. Definition of done

A task is finished when:

* the requested change is implemented
* the site still builds successfully
* existing important functionality still works
* the result works on mobile
* the result fits The Breeze visual identity
* no unnecessary complexity was introduced
* Paul can understand what changed
* routine maintenance has not become harder

The goal is not simply to produce code.

The goal is to maintain a website that looks professional, supports The Breeze as a live band, helps generate bookings, and remains manageable for a non-developer.
