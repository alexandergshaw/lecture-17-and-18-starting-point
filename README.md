# Byte Bistro Customer Portal

A responsive, accessible static demonstration for DEV.140 Homework 8, with a separate GitHub profile explorer and materials for the Peer Review Feedback assignment. The contact form validates input **only**: it does not send or store a message.

## Technology

Semantic HTML5, CSS3, and vanilla JavaScript (ES6+). There is no framework, build step, backend, database, API key, or environment configuration.

## Files

```text
index.html                        Page and semantic form markup
css/styles.css                    Responsive styling and focus/error states
js/main.js                        Form validation and GitHub API interaction
peer-review/feedback-template.md  Two reusable review sections
peer-review/review-checklist.md   Practical review and testing instructions
```

## Run locally

Open `index.html` in a modern browser, or serve the project directory locally:

```sh
python3 -m http.server 8000
```

Visit <http://localhost:8000/>. An internet connection is needed for the optional GitHub explorer; the contact form works offline.

## Publish with GitHub Pages

1. Push the completed files to your repository's default branch (or another branch you choose to publish).
2. On GitHub, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**.
3. Select the branch containing these files and the **/(root)** folder, then save.
4. Wait for the Pages deployment to finish and open the URL shown in Settings → Pages. Relative CSS and JavaScript paths work under a repository subpath.

## Contact form and validation

Enter a full name, email address, subject, and message, then select **Check message**. JavaScript prevents page submission, trims values for validation, and reports empty or whitespace-only fields beside their controls. Email must also have a basic `name@domain.tld` structure. The first invalid field receives focus, and editing a field clears its error; submitting again revalidates everything. A successful check displays a confirmation that explicitly says the message was **not sent**. No form data leaves the browser.

## GitHub profile explorer

Enter a public username such as `octocat` and select **Load profile**. The separate feature fetches `https://api.github.com/users/{username}`, checks the response, and displays a loading state followed by a profile or a readable error. API text is inserted as text, not HTML; profile links are constructed from the validated username. Network problems, missing users, and GitHub's unauthenticated rate limit can prevent a lookup without affecting the contact form.

## Peer review assignment

Use [the checklist](peer-review/review-checklist.md) to inspect **each of two actual classmates' capstone drafts**, then fill in both sections of [the feedback template](peer-review/feedback-template.md). Include each real project URL and at least 150 words per review, based on your own observations. Combine both completed reviews in one text response for submission. Creating this repository or leaving placeholders unfilled does not complete the peer-review assignment.

## Requirement verification

### Homework 8

| Requirement | Points | Where to verify |
|---|---:|---|
| Accessible HTML form | 20 | `index.html`: labels, required controls, descriptions, and inline error elements |
| Empty-field validation | 20 | `js/main.js`: submit handler, trimmed values, inline errors, and focus |
| Format validation | 20 | `js/main.js`: email structure check and input error clearing |
| Optional API fetch | Up to 5 bonus | `js/main.js`: separate GitHub fetch, loading, results, and errors |

### Peer Review Feedback (30 points)

Use this checklist for the separate submission; it is not a claim that reviews have already been performed.

| Checklist | Verify before submitting |
|---|---|
| Two actual reviews | Each has a real project URL and at least 150 words |
| All five categories | HTML semantics, CSS/responsiveness, accessibility, JavaScript, and one specific improvement appear in each review |
| Constructive specificity | Begin with a strength; cite observed details, explain why they matter, and give actionable suggestions without unsupported assumptions |
| Submission | Both reviews are combined in one text response |

## Troubleshooting

- **Styling or interactions missing:** keep the directory structure intact and check that `css/styles.css` and `js/main.js` load; refresh the page.
- **Profile lookup fails:** check the username and internet connection. GitHub may rate-limit unauthenticated requests; wait and try again. A missing user produces a separate not-found message.
- **No message arrives:** this is intentional. The form only demonstrates validation; it has no delivery service.
- **Pages shows a 404:** confirm the selected branch and `/(root)` contain `index.html`, wait for deployment, and use the URL in Pages settings.
