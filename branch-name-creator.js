#!/usr/bin/env node

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question(`Enter branch name: `, (name) => {
  console.log('=> ', name.toLowerCase().split(' ').join('-'))
  readline.close()
})
