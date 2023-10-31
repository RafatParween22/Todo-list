"use client";
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';

function MyButton() {
  return (
    <button>
      Its a box
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to todo app:</h1>
      <MyButton />
    </div>
  );
}

