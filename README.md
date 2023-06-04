# sleep-action

Sleep for a set period of time. Uses [zeit/ms](https://github.com/zeit/ms) for
human friendly time strings.

## Usage

```yaml
steps:
  - name: Sleep for 10s
    uses: juliangruber/sleep-action@v2
    with:
      time: 10s
```

## License

MIT
