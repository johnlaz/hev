<div align="center">

# GMC Hummer EV Owner Guide

**The owner's manual you'll actually open.**
A pocket-sized, installable guide to the GMC Hummer EV: setup checklist, drive modes, CrabWalk, Watts to Freedom, Sky Panels, Super Cruise and a library of walkthrough videos. It installs like an app and keeps working when the signal doesn't.

![PWA](https://img.shields.io/badge/PWA-installable-d8483b?style=flat-square)
![Offline](https://img.shields.io/badge/works-offline-f5a00f?style=flat-square)
![No tracking](https://img.shields.io/badge/no-tracking-4a494e?style=flat-square)
![No build step](https://img.shields.io/badge/build-none-4a494e?style=flat-square)

</div>

---

## Why this exists

A 9,000-pound electric supertruck comes with more buttons, modes and menus than most people find in a year. The glovebox manual is enormous, the good tips are scattered across a dozen videos, and nobody wants to dig through either while standing in the driveway.

This guide puts the important stuff in one place, in plain language, with the right video sitting right next to the feature it explains.

## What's inside

| Tab | What you get |
| --- | --- |
| ⚙️ **Setup** | A four-step first-day checklist: key fob and profile linking, seat and mirror memory, climate automation, safety settings and software updates. Tick items off and watch the progress bar fill. |
| 🏎️ **Driving & Modes** | Shifting, One-Pedal Driving and the regen paddle, the full drive mode dial, My Mode, **Watts to Freedom** launch steps, **CrabWalk** and **King Crab**, and the Off-Road app. |
| ☀️ **Roof & Exterior** | One-touch all-windows-down, Sky Panel removal and frunk storage, air suspension heights and Extract Mode. |
| 💻 **Tech & Cameras** | Super Cruise and what the light bar colors mean, the 360 and underbody camera views, the power frunk, charging and the Energy app. |
| 🎬 **Video Library** | All 12 videos in one place, every link printed in full, plus GMC's Declassified playlist and official quick start guides. |

## Highlights

- **Videos where you need them.** 12 hand-picked walkthroughs (10 from GMC's own channel) sit inside the section they explain. Tap to play in place, or jump to YouTube.
- **Installs like a real app.** One tap to add it to the home screen, with its own icon, splash color and full-screen window.
- **Works offline.** The whole guide is cached on the device after the first visit. Perfect for the trailhead, the parking garage and the dead zone. (Videos still need a connection.)
- **Keeps your place.** Setup steps and "watched" marks are remembered on the device. No account, no sign-in, nothing uploaded.
- **Never a dead end.** If a video is removed or won't embed, the card offers a direct YouTube link and a search link so the guide never has a hole in it.
- **Dressed like the truck.** Matte graphite panels, gloss-black trim, red seat accents and amber marker-light glow, all pulled from the actual vehicle.
- **Fast and private.** No frameworks, no analytics, no ads. Everything visual is embedded in the app and videos load through YouTube's privacy-enhanced player.

## Install it

**Android (Chrome):** open the site, tap **Install app** on the home screen of the guide (or Chrome menu ▸ *Install app*).

**iPhone / iPad (Safari):** open the site, tap the **Share** button, then **Add to Home Screen**.

**Desktop (Chrome or Edge):** click the install icon at the right end of the address bar.

Once installed it opens in its own window. Long-press the icon on Android for shortcuts straight to *Setup*, *Driving* and *Videos*.

## Deploy in five minutes (GitHub Pages)

Everything sits in one flat folder, with no subfolders. Keep all the files side by side.

1. Create a new repository, for example `hummer-ev-guide`.
2. Upload every file from this folder to the repository root.
3. In the repo go to **Settings ▸ Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.
4. After a minute the site is live at `https://<your-username>.github.io/hummer-ev-guide/`.
5. Open it once on your phone while online so the offline copy is saved, then install it.

> **Heads up:** the app needs to be served over `https://` (GitHub Pages does this) or `localhost`. Opening `index.html` straight from a phone's Downloads folder works as a basic page, but installing, offline mode and some YouTube embeds need the hosted version.

## Run it locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Shipping updates

1. Edit `index.html` (content, videos, styling).
2. Change `VERSION` at the top of `sw.js`, for example `v1.0.3`, and update the version in the footer of `index.html`.
3. Commit and push. Anyone with the app installed gets a small **Reload** prompt the next time they open it.

Skipping step 2 means installed copies can keep showing the old cached version.

## Customize it

- **Videos:** edit the `VIDEOS` list in the script at the bottom of `index.html`. Each entry is a YouTube ID, a title and a one-line description. Then drop `data-vid="ID"` into any section to embed it there.
- **Colors:** everything is driven by the CSS variables at the top of the stylesheet (`--red`, `--amber`, `--graphite` and friends).
- **Icons:** replace the PNG files with your own at the same sizes. The `maskable` versions keep the artwork inside Android's safe zone so round masks don't clip it.

## What's in the box

```
.
├── index.html               # the app: markup, styles, logic, fonts and header image embedded
├── sw.js                    # tiny service worker that makes it work offline
├── manifest.webmanifest     # app name, colors, icons and home-screen shortcuts
├── icon-192.png             # app icon
├── icon-512.png             # app icon (large)
├── icon-maskable-192.png    # padded icon for Android's round and squircle masks
├── icon-maskable-512.png    # padded icon (large)
├── apple-touch-icon.png     # iPhone / iPad home-screen icon
└── README.md
```

## Under the hood

- Plain HTML, CSS and JavaScript. No framework, no bundler, no build step. Fonts and the header image are embedded right in `index.html`.
- The service worker saves the page for offline use and serves it network-first (so updates land). Cross-origin requests such as YouTube are never intercepted.
- Progress is stored in `localStorage` on the device only.
- Videos use the `youtube-nocookie.com` embed with a lightweight click-to-load thumbnail, so nothing from YouTube loads until you tap play.
- Want it in the Play Store? A PWA like this can be wrapped as an Android app with [PWABuilder](https://www.pwabuilder.com/).

## A note on accuracy

The driving-mode steps for **CrabWalk, King Crab and Watts to Freedom** were checked against GMC's own quick start guides. The setup menus, roof panel steps and other tips are practical notes that haven't been individually verified against your specific model year, and menus can change with software updates. Treat this as a friendly companion to, not a replacement for, the Owner's Manual, especially for anything safety-related. **Watts to Freedom is for closed courses only.**

Videos belong to their uploaders and are simply embedded from YouTube. If one goes private or gets removed, use the search link on its card or send a replacement.

## Credits & disclaimer

- Fonts (embedded, Latin subset): [Barlow](https://github.com/jpt/barlow) and Barlow Condensed by Jeremy Tribby, licensed under the SIL Open Font License 1.1.
- Built by John Lazzaro · LAZLAB Creations, for Dad.
- This is an unofficial, independent owner's aid. It is **not affiliated with, endorsed by, or sponsored by General Motors or GMC**. GMC, HUMMER and related names and logos are trademarks of General Motors LLC and are used here only to identify the vehicle the guide is about.
- No license has been chosen yet. Add a `LICENSE` file before making the repository public (MIT is a common, permissive choice).
