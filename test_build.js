const { execSync } = require('child_process');
try {
  const result = execSync('npm run build', { encoding: 'utf8' });
  console.log('SUCCESS:', result);
} catch (err) {
  console.log('FAILED STDOUT:\\n', err.stdout);
  console.log('FAILED STDERR:\\n', err.stderr);
}
