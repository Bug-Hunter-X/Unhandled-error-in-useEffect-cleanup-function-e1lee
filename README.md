# Unhandled Error in useEffect Cleanup Function

This repository demonstrates a common error encountered in React 18 and later versions: unhandled errors within the cleanup function of `useEffect` hooks.

## The Problem

In React 18, the behavior of the cleanup function within `useEffect` has become more robust.  Previously, errors thrown within the cleanup function might have been silently ignored.  Now, they trigger warnings (and potentially disrupt the application).  This example showcases this scenario and its solution.

## Solution

The solution involves proper error handling within the cleanup function to prevent the warnings and ensure the application remains stable. This usually involves a `try...catch` block.