import React from 'react';

// Extend the global JSX namespace
declare global {
  namespace JSX {
    // Define the IntrinsicElements interface
    interface IntrinsicElements {
      // Define interfaces for HTML elements here
      // For example:
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      // Add more interfaces for other HTML elements as needed
    }
  }
}
