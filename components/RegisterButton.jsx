import React from 'react'
import { Button } from '@mantine/core';
import styles from '../styles/signup.module.scss'

const RegisterButton = ({text}) => {
  return (
    <div style={{padding: '0.5rem'}}>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            {text}
      </Button>
    </div>
  )
}

export default RegisterButton