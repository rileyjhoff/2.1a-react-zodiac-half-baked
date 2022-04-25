import React from 'react';
import './Footer.css';

export default function Footer({ year }) {
  return (
    <footer>
      <div>
        Copyright Alchemy Codelab {year}
      </div>
    </footer>
  );
}
