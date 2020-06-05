import React from 'react'
import Card from './index'
import moment from 'moment'

export default {
  title: 'Card',
  component: Card
}

let Description =
  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis nibh et ex vehicula rhoncus. Vivamus tempor dolor augue, ut aliquet orci pretium ut. Phasellus vitae viverra nulla. Sed finibus ac mauris in molestie. Aenean vitae sem sit amet leo finibus pulvinar. Ut tellus nibh, pharetra non dictum eget, imperdiet in diam. Pellentesque laoreet tincidunt malesuada. Donec id tempus lacus. Aenean nec convallis ex, nec finibus libero. Praesent ullamcorper bibendum aliquet. Aenean eu erat hendrerit, tincidunt eros id, bibendum purus. Fusce feugiat orci quis orci sagittis, sit amet elementum magna efficitur. Aliquam pharetra tortor lacus, a finibus neque efficitur quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ullamcorper tempus ipsum, ut pharetra mi imperdiet et. '

let title = 'Le repo qui fait le café'
let category = 'Le repo qui va faire le café'
let date = moment().format('MMMM Do YYYY à h:mm:ss a') // June 4th 2020, 11:23:19 am
let type = 'Projet'
let link = '#'
let linkName = ' Lire la suite >'
let numberLike = 90

export const BlueCard = () => (
  <Card
    color='blue'
    title={title}
    category={category}
    description={Description}
    date={date}
    type={type}
    link={link}
    linkName={linkName}
    numberLike={numberLike}
  />
)

export const RedCard = () => (
  <Card
    color='red'
    title={title}
    category={category}
    description={Description}
    date={date}
    type={type}
    link={link}
    linkName={linkName}
    numberLike={numberLike}
  />
)
