# news-image-20261123
[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/sipemburu23/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/sipemburu23/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

The World in One Day — Monday 23 November 2026. A single image summing up the day's world news: 29 stories (3 leads + 10 cards + 16 briefs), 13 drawn, across 7 regions.

**Leads:** Nvidia brings back Huang — shares +31.48% · Ukraine sinks Russian warship off Libya · 24 dead in Indonesia factory fire.

**Cards:** Dymer toll 11 as woman survives · India's $1.62bn aid for Nepal · EU's 22nd sanctions plan · COP31 blame game · Shuri Castle reopens · India–NZ Test drawn · UK to host 2035 World Cup · US blacklists Megaspeed · US sanctions Iran's banks · Biggest AI screening trial.

**Briefs (14–29):** Colombia police base hit; 3 hurt · Gomez resigns after ethics report · Prabowo names two VP candidates · Thai court halves royal-insult term · UN demands Benghazi port probe · 15 die in South Sudan raid · Ghana win Amputee Football World Cup · Guterres urges global AI rules · BepiColombo 'on track' after glitch · Australia freezes scripts at $25 · Iran: US must pay $290bn · Kyiv hit again; Ukraine strikes Perm · Court clears Iowa explosives blast · Asda equal-pay final hearing opens · Libya seizes 4m drug pills · Uganda survivors go to UN.

## How to run

```sh
node main.ts            # copies entry.png to /output/entry.png
OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` is copy-only: it never runs `draw.py`. The front page is baked into `entry.png` at build time by `draw.py` (Python + Pillow, all artwork drawn in code — no external images).

## License

MIT — see LICENSE.
