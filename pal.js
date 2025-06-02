function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

document.getElementById('check-btn').addEventListener('click', function () {
  const input = document.getElementById('text-input').value;
  const result = document.getElementById('result');

  if (input.trim() === '') {
    alert('Please input a value');
    return;
  }

  const isPalin = isPalindrome(input);
  result.textContent = `${input} is ${isPalin ? '' : 'not '}a palindrome.`;
});
