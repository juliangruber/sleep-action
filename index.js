'use strict'

const core = require('@actions/core')
const ms = require('ms')

const sleep = dt => new Promise(resolve => setTimeout(resolve, dt))

const main = async () => {
  const time = core.getInput('time')
  await sleep(ms(time))
}

main().catch(err => core.setFailed(err.message))
