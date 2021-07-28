function checkSpam(str) {
  // ваш код...
  str = str.toLowerCase();
  if (str.includes('1xBet'.toLowerCase()) || str.includes('XXX'.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}


