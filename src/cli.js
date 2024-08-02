#!/usr/bin/env node

const { Command } = require('commander');
const { convertToEmoji } = require('./index');
const program = new Command();

program
    .version('1.0.0')
    .description('Convert text representations of emojis into actual emojis')
    .argument('<text>', 'text to convert')
    .action((text) => {
        const convertedText = convertToEmoji(text);
        console.log(convertedText);
    });

program.parse(process.argv);
