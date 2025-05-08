# Poetic Remedies Oracle

An interactive, poetic card deck that flips between:

- a poetic archetype (front)
- a remedy name (back)
- and a dual state combining both

Built with HTML, CSS, JS — no frameworks or build tools.

## How to Run

Just open `index.html` in a browser.

## How to Add a Remedy

Edit `remedies.json` and add a new entry with:

- `poeticName`
- `remedyName`
- `description`
- `image` (relative path to JPG/PNG)

## Directory Structure

- `index.html` — main layout and card shell
- `styles.css` — card styling, flip animation, dual mode
- `script.js` — state handling and dynamic rendering
- `remedies.json` — remedy data (name, poetic title, description, image path)
- `images/` — artwork assets
- `audio/` — sound assets

## Credits

Designed and developed by AK & AA
