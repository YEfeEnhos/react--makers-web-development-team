import React from 'react'

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'tr-TR',
    { weekday: 'long' }
  ).format(date);
}

export default function DisplayDate() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}