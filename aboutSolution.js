```javascript
// pages/about.js

export default function About() {
  const x = 10;
  const y = 0;
  let result;
  try {
    result = x / y; 
  } catch (error) {
    result = 'Infinity'; // Handle the error gracefully
    console.error('Error:', error);
  }
  return (
    <div>
      <h1>About Page</h1>
      <p>Result of x/y: {result}</p>
    </div>
  );
}
```