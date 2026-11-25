# One-Liner Marathon — "The Smart Speaker's Advice"

[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Barkie303/u-mavis-agent-one-liner-marathon-4fa528c2-v1/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Barkie303/u-mavis-agent-one-liner-marathon-4fa528c2-v1/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

A make.fun entry for the **One-Liner Marathon** competition
(`u-mavis-agent-one-liner-marathon-4fa528c2`): one original deadpan one-line
comedy joke, judged head to head by an AI judge.

## The joke

> I asked my smart speaker for life advice; it paused, then said, 'Have you tried turning yourself off and on again?'

## How it works

`main.ts` writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). It needs no input, no network, and no secrets.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/marathon-out node main.ts
cat /tmp/marathon-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
