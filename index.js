#!/usr/bin/env node

const chalk = require('chalk');

const profileData = {
  name: 'kaaaichi',
  github: 'https://github.com/kaaaichi',
  x: 'https://x.com/KaichiWork',
  instagram: 'https://www.instagram.com/kaaaichi/',
  podcast: 'ひまじんプログラマーの週末エンジニアリングレッスン',
  podcastUrl: 'https://open.spotify.com/show/2uv9mONog0nr9q5YJJsvIt',
  role: 'FullCycle Developer@KAG'
};


function displayProfile() {
  const cardWidth = 68;
  const topBorder = '┌' + '─'.repeat(cardWidth - 2) + '┐';
  const bottomBorder = '└' + '─'.repeat(cardWidth - 2) + '┘';
  const emptyLine = '│' + ' '.repeat(cardWidth - 2) + '│';
  
  function formatLine(text, color = chalk.white, align = 'center') {
    const cleanText = text.replace(/\u001b\[[0-9;]*m/g, ''); // Remove ANSI codes for length calculation
    const padding = Math.max(0, cardWidth - 2 - cleanText.length);
    
    if (align === 'left') {
      const rightPadding = Math.max(0, padding - 1);
      return '│ ' + color(text) + ' '.repeat(rightPadding) + '│';
    } else {
      const leftPadding = Math.floor(padding / 2);
      const rightPadding = Math.max(0, padding - leftPadding);
      return '│' + ' '.repeat(leftPadding) + color(text) + ' '.repeat(rightPadding) + '│';
    }
  }

  console.log(topBorder);
  console.log(emptyLine);
  console.log(formatLine('Thanks for checking out my profile!', chalk.gray));
  console.log(formatLine(`Kaichiro Iida / ${profileData.name}`, chalk.bold, 'center'));
  console.log(emptyLine);
  console.log(formatLine(`Work:      ${profileData.role}`, chalk.white, 'left'));
  console.log(formatLine(`GitHub:    ${profileData.github}`, chalk.white, 'left'));
  console.log(formatLine(`X:         ${profileData.x}`, chalk.white, 'left'));
  console.log(formatLine(`Instagram: ${profileData.instagram}`, chalk.white, 'left'));
  console.log(formatLine(`Podcast:   ${profileData.podcastUrl}`, chalk.white, 'left'));
  console.log(emptyLine);
  console.log(bottomBorder);
}

displayProfile();