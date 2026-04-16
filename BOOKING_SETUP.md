# Booking Setup

## Recommended setup

Primary provider: `SimplyBook`

Fallback provider: `Calendly`

Why:

- `SimplyBook` is the better fit for this site because its official docs cover embeddable widgets, intake forms, packages, payments, Google Calendar sync, email reminders, cancellation policy controls, and online video meetings.
- `Calendly` is still supported in the code as a fallback because its official docs cover inline embeds, invitee forms, payments, availability controls, reminders/workflows, and video meeting locations. It is weaker here for the 3-session package flow.

## What is already implemented in the site

- New page: `booking.html`
  - service selection for `Single Session` and `3-Session Package`
  - required intake form before booking
  - age gate for `18+`
  - cancellation policy block with required acceptance checkbox
  - booking container prepared for inline embed or external provider handoff
  - same language persistence as the rest of the site (`ru`, `he`, `en`)

- Modular config file: `booking-config.js`
  - provider switch (`simplybook` or `calendly`)
  - on/off flag for live booking
  - separate URLs per service
  - booking rules and policy parameters in one place

- Integration controller: `booking.js`
  - validates the intake form
  - stores booking lead data in session storage
  - loads SimplyBook iframe mode
  - loads Calendly advanced inline embed mode
  - prefills Calendly with client details when Calendly is the active provider

- Main site connected to the new flow:
  - top CTA now opens `booking.html`
  - service buttons now open `booking.html?service=single` and `booking.html?service=package`
  - booking CTA in contact section now opens `booking.html`
  - visible cancellation note on the home page updated to the new policy

## What still needs real credentials/accounts

### Required for SimplyBook live activation

- A real `SimplyBook` account/subdomain
- Public booking URL
- Widget URL for:
  - single session
  - 3-session package
- Google account for `Calendar Sync`
- Payment processor account supported by `SimplyBook` / `SBPay.me`
- Final video meeting choice:
  - `Google Meet` through `Calendar Sync`, or
  - `Zoom` through `Online Video Meetings`

### Required for Calendly fallback activation

- Real `Calendly` event URL for:
  - single session
  - package flow if you decide to keep Calendly for that service
- Stripe or PayPal connection inside Calendly if you want payment there
- Calendly plan that supports the needed features

## Exact provider-side setup to do in SimplyBook

### 1. Enable the core features

Enable these features in `SimplyBook`:

- `Accept Payments`
- `Packages`
- `Intake Forms`
- `Calendar Sync`
- `Cancellation Policy`
- `Contact Widget` or iframe widget
- `Online Video Meetings` only if you choose Zoom

Optional but useful:

- `Flexible notifications`
- `Client Login`
- `External Booking Validator`

### 2. Create the services

Create these two items:

- `Single Session`
  - online only
  - duration: 50 minutes internally, displayed as `45-55 minutes`
  - direct booking enabled
  - price set online before confirmation

- `3-Session Package`
  - package sold online
  - do not expose automatic booking for all 3 sessions unless later desired
  - operational rule: sessions 2 and 3 are coordinated manually after purchase

### 3. Configure the intake fields

Recreate these required fields in `Intake Forms`:

- Full name
- Email
- Phone / WhatsApp
- Language
- Reason for consultation
- Date of birth

Also set:

- all required
- language choices limited to `Hebrew` and `Russian`
- if you want stricter control, add an external validator later for `18+`

### 4. Configure calendar logic

Set:

- Google Calendar two-way sync
- `sync busy time` on
- `create google meet link` on if you choose Google Meet
- minimum notice: `24 hours`
- no manual approval
- no buffer between sessions

### 5. Configure reminders and confirmation emails

Set:

- booking confirmation email
- reminder email `24 hours` before
- reminder email `1 hour` before

### 6. Configure cancellation

Set the visible policy text to:

- free cancellation up to `24 hours` before
- late cancellation or no-show: `50% refund`

Important:

- `SimplyBook` can enforce the `24-hour` cancellation window through its `Cancellation Policy` feature.
- The `50% refund` rule is not something I found documented as an automatic rule in the booking flow itself. Based on the official payment docs, refunds are handled via `SBPay.me` or manually from the payment processor admin. So that part should be treated as an operational/payment workflow rule unless your chosen processor supports an automated partial-refund flow.

## Payment note about Bit

I did not find `Bit personal` documented in the official payment integrations I reviewed for this setup.

Inference:

- do not plan on activating real online payments with a personal Bit account alone
- use a payment processor officially supported by the chosen booking platform
- if the client wants to keep Bit for informal transfers, that would be outside this professional integrated booking flow

## Files to edit when the real accounts exist

Edit `booking-config.js`:

- set `bookingEnabled` to `true`
- confirm `activeProvider`
- fill `providers.simplybook.publicBookingUrl`
- fill `providers.simplybook.widgetUrls.single`
- fill `providers.simplybook.widgetUrls.package`

If using Calendly instead:

- set `activeProvider` to `calendly`
- fill `providers.calendly.eventUrls.single`
- fill `providers.calendly.eventUrls.package`

## Official sources reviewed

SimplyBook:

- Widgets / booking website features: [Contact Widget custom feature](https://help.simplybook.me/index.php/Contact_Widget_custom_feature/en)
- Intake forms: [Intake Forms custom feature](https://help.simplybook.me/index.php?mobileaction=toggle_view_desktop&title=Intake_Forms_custom_feature)
- Packages: [Packages custom feature](https://help.simplybook.me/index.php/Packages_custom_feature)
- Payments: [Accept Payments custom feature](https://help.simplybook.me/index.php?mobileaction=toggle_view_desktop&title=Accept_payments_custom_feature%2Fen)
- Payment processors list: [SBPay.me integration](https://help.simplybook.me/index.php/SBPay.me_integration)
- Calendar sync + Google Meet: [Calendar Sync custom feature](https://help.simplybook.me/index.php/Calendar_Sync_custom_feature)
- Zoom meetings: [Online Video Meetings Custom Feature](https://help.simplybook.me/index.php/Online_Video_Meetings_Custom_Feature)
- Notifications and reminders: [Adjusting notifications](https://help.simplybook.me/index.php/Adjusting_notifications)
- Cancellation controls: [Cancellation Policy custom feature](https://help.simplybook.me/index.php/Cancellation_Policy_custom_feature)
- Approval behavior: [Approve Bookings custom feature](https://help.simplybook.me/index.php/Special%3AMyLanguage/Approve_Bookings_custom_feature)

Calendly:

- Inline and advanced embed: [Advanced Calendly embed for developers](https://calendly.com/help/advanced-calendly-embed-for-developers)
- Event settings, invitee form, payment, reminders, minimum notice: [How to customize your event types](https://calendly.com/help/how-to-customize-your-event-types)
- Workflows / reminders: [Workflows overview](https://help.calendly.com/hc/en-us/articles/360051017814-Workflows-overview)

## Practical recommendation

For this specific project, keep `SimplyBook` as the production target.

Reason:

- it matches the package requirement better
- it matches the intake-form requirement better
- it matches Google Calendar + Google Meet with less custom work
- it keeps the booking flow closer to what the client wants without building a custom backend from scratch
