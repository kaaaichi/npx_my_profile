#!/usr/bin/env node

const chalk = require('chalk');

const profileData = {
  name: 'kaaaichi',
  github: 'https://github.com/kaaaichi',
  twitter: 'https://twitter.com/your_twitter',
  instagram: 'https://instagram.com/your_instagram',
  podcast: 'Your Podcast Channel',
  company: 'Your Company',
  role: 'Your Role'
};

const asciiArt = `
 ██╗  ██╗ █████╗  █████╗  █████╗  ██╗ ██████╗██╗  ██╗██╗
 ██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██║██╔════╝██║  ██║██║
 █████╔╝ ███████║███████║███████║██║██║     ███████║██║
 ██╔═██╗ ██╔══██║██╔══██║██╔══██║██║██║     ██╔══██║██║
 ██║  ██╗██║  ██║██║  ██║██║  ██║██║╚██████╗██║  ██║██║
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝
`;

function displayProfile() {
  const cardWidth = 60;
  const topBorder = '┌' + '─'.repeat(cardWidth - 2) + '┐';
  const bottomBorder = '└' + '─'.repeat(cardWidth - 2) + '┘';
  const emptyLine = '│' + ' '.repeat(cardWidth - 2) + '│';
  
  function formatLine(text, color = chalk.white, align = 'center') {
    const cleanText = text.replace(/\u001b\[[0-9;]*m/g, ''); // Remove ANSI codes for length calculation
    const padding = Math.max(0, cardWidth - 2 - cleanText.length);
    
    if (align === 'left') {
      return '│ ' + color(text) + ' '.repeat(padding - 1) + '│';
    } else {
      const leftPadding = Math.floor(padding / 2);
      const rightPadding = padding - leftPadding;
      return '│' + ' '.repeat(leftPadding) + color(text) + ' '.repeat(rightPadding) + '│';
    }
  }

  console.log(chalk.cyan(topBorder));
  console.log(emptyLine);
  console.log(formatLine(asciiArt.trim(), chalk.cyan));
  console.log(emptyLine);
  console.log(formatLine(`👋 Hello! I'm ${profileData.name}`, chalk.bold.green, 'left'));
  console.log(formatLine(`🏢 ${profileData.company} - ${profileData.role}`, chalk.yellow, 'left'));
  console.log(formatLine(`🐙 ${profileData.github}`, chalk.magenta, 'left'));
  console.log(formatLine(`🐦 ${profileData.twitter}`, chalk.blue, 'left'));
  console.log(formatLine(`📸 ${profileData.instagram}`, chalk.red, 'left'));
  console.log(formatLine(`🎙️ ${profileData.podcast}`, chalk.green, 'left'));
  console.log(emptyLine);
  console.log(formatLine('Thanks for checking out my profile! 🎉', chalk.dim));
  console.log(emptyLine);
  console.log(chalk.cyan(bottomBorder));
}

displayProfile();