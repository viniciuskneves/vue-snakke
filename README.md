# Vue Snakke

Vue Snakke allows you to add a reading progress bar to your Vue 3 project.

![Vue Snakke example](./example.gif)

## Install

```
npm install vue-snakke
```

## Usage

Add the following import to your `setup` function:

```javascript
import { useSnakke } from 'vue-snakke';

const { progress } = useSnakke();
```

`progress` is a readonly value (from 0 to 1) that will automatically update whenever the page is scrolled. You can use it to indicate page progress.

## Development

### Commands

Run through `npm run [command]`:

- `prettier`: runs Prettier on write mode (overwrites files)
- `prettier:check`: runs Prettier on check mode (useful in CI)

---

_This project is heavily inspired by [React Snakke](https://github.com/diogomoretti/react-snakke) from [diogomoretti](https://github.com/diogomoretti)._
