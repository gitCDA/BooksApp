import { Text, View } from 'react-native'
import React from 'react'
import { styles } from '../../../theme/ecommerce/styles'
import { useSelector } from 'react-redux'
import Private from '../Private'
import Public from '../Public'

const Settings = () => {

  const { dataUser } = useSelector( state => state)
  console.log( "dataUser", dataUser)

  return (

    dataUser ? <Private /> : <Public />

  )
}

export default Settings