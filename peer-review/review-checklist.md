# Peer Review Inspection Checklist

Repeat these steps for **each of two actual classmates' capstone drafts**. Record the real URL, what you observed, and where you observed it. If something cannot be tested, say so rather than assuming it works or fails.

## HTML structure & semantics

- [ ] Inspect the page in browser DevTools Elements panel. Look for meaningful landmarks such as `header`, `nav`, `main`, and `footer`, and appropriate elements for content and controls.
- [ ] Check that headings describe the content and follow a logical hierarchy. Note a specific example and why it helps or hinders navigation.

## CSS & responsiveness

- [ ] Examine spacing, typography, color, and visual consistency; identify a specific effective choice.
- [ ] Use DevTools device mode or resize the browser at narrow mobile, tablet, and desktop widths. Check for horizontal scrolling, clipping, overlapping content, and usable navigation. Record the viewport and any issue.

## Accessibility

- [ ] Check that form controls have visible, correctly associated labels and that error messages are understandable.
- [ ] Run [WAVE](https://wave.webaim.org/) on the actual project URL (or use its browser extension). Record relevant findings and inspect them in context; automated results do not replace manual testing.
- [ ] Check text and control contrast with a browser DevTools contrast tool, and check that information is not conveyed by color alone.
- [ ] Use Tab and Shift+Tab to reach controls, verify visible focus and a logical order, and use Enter/Space to operate them. Check for keyboard traps.

## JavaScript

- [ ] Exercise each interactive feature, including invalid and valid inputs where applicable. Describe the actual behavior and any visible feedback.
- [ ] Repeat interactions using only the keyboard. Check the browser DevTools Console for errors and report any relevant, reproducible issue.

## Specific improvement & submission

- [ ] Choose one concrete, high-impact recommendation and explain where to apply it and how it would help users.
- [ ] In each review, start with a genuine strength, refer to observed details, explain why choices matter, and offer constructive next steps.
- [ ] Include each actual URL and at least 150 words per review. Combine both reviews in one text response; remove template placeholders before submitting.
