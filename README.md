# CuraLink

This repository contains a simple prototype of the CuraLink caregiver gig platform. It is a static demonstration of the "Phase 1" website with pages for caregivers, families/clients, and agencies. All data is stored in the browser via `localStorage` so you can try the basic flows without a backend.

## Pages

- **index.html** – Landing page with links to the caregiver, family, and agency pages.
- **caregiver.html** – Form for caregivers to save their profile (name, skills, availability).
- **family.html** – Search for caregivers by name or skill.
- **agency.html** – View the list of caregivers saved on the device.

## Usage

Open `index.html` in a browser. From there you can navigate to the other pages. Because this is a static prototype, refreshing the browser will clear any data you entered unless you allow `localStorage` to persist.
