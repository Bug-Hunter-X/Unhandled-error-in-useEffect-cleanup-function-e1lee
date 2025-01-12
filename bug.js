```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause a warning in React 18+ if the return function
    // doesn't clean up properly or if it throws an error.
    return () => {
      // Simulate an error for demonstration purposes
      throw new Error('Something went wrong in cleanup!');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```