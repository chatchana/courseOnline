import React from 'react'
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Link
} from 'grommet'
//import { Cart } from 'grommet-icons'
import { connect } from 'react-redux'

class ProductItem extends React.Component {
  handleAddToCart = () => {
    console.log('Add to cart')
    const {
      addItem,
      name
    } = this.props;
    addItem(name)
  }
  render() {
    const { name, description, image, price } = this.props
    return (      
      <Box
        direction="column"
        basis="medium"
        pad="small"
      >
        <Box>
          <Stack fill anchor="top-right">
            <Box height="small">
              <Image fit="cover" src={image} />
            </Box>
          </Stack>
        </Box>
        <Box align="center">
          <Heading textAlign="center" level={4} margin={{vertical: 'xsmall'}}>
            <a href="">{name}</a>
          </Heading>
          <Text textAlign="center">
            {description}
          </Text>
          <Text textAlign="center" >
            {price} Baht
          </Text>
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: dispatch.cart.addItem
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
