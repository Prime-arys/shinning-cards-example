# Shinning Cards Example

This is a simple example of a ``card`` shinning effect using mouse position, in React.

## How to run

```bash
npm i
npm run dev
```

## How it works

Each card is aware of the mouse position in the screen.
Cards will calculate a halo effect around the mouse, and the card will be illuminated by this halo.
A card is composed with a ``box`` and the card itself/card content.
The ``box`` is the one that will be lighted up by the halo effect (technically, the whole ``box`` will be lighted up).
The card content which is over the ``box`` have a static background color.
This way, only the ``box`` will be lighted up by the halo effect, and the card content background color will be static.

(Maybe better explanation : [@LearnVue](https://www.youtube.com/shorts/tlv4jayQchc))

## Credits

- [LearnVue](https://www.youtube.com/shorts/tlv4jayQchc) for the idea and the explanation.

<hr>

© All rights reserved
