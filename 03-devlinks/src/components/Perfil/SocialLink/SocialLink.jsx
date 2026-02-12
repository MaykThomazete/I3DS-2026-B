import React from 'react'

const SocialLink = ({ url, icon }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label={icon}>
      <ion-icon name={icon}></ion-icon>
    </a>
  )
}

export default SocialLink
