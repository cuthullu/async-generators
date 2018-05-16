import React, { Component } from 'react';
import './image.css'

const Image = ({source }) => source ? <img className="stream-image" src={source} /> : null

export {
  Image
}