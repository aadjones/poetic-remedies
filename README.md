# Poetic Remedies Oracle

A poetic card-flip oracle where each remedy is embodied as a two-faced archetype. Click cycles through:
1. Poetic front
2. Back (remedy name)
3. Front + remedy name
...and repeats

## Directory Structure

- `index.html` — main layout and card shell
- `styles.css` — card styling, flip animation, dual mode
- `script.js` — state handling and dynamic rendering
- `remedies.json` — remedy data (name, poetic title, description, image path)
- `images/` — artwork assets
- `audio/` — flip.mp3 sound

## Adding a Remedy

Add an entry to `remedies.json`:

```json
{
  "poeticName": "The Quiet Refusal",
  "description": "Deeply self-insecure...",
  "remedyName": "Silica Terra",
  "image": "images/silica.png"
}
