import React from 'react'
import { Box, Text } from 'grommet'
import ProductItem from './ProductItem'
import { Previous, Next } from 'grommet-icons';
// import request from '../utils/request'

class ProductList extends React.Component {
  state = {
    //data: []
    data : [
          {id: 1,
            topic: "Popular Topic",
            name: "name1",
            description: "description1",
            image: "image1.jpg",
            price: 100},
          {id: 2,
            topic: "Popular Topic",
            name: "name2",
            description: "description2",
            image: "image2.jpg",
            price: 200},  
          {id: 3,
            topic: "Popular Topic",
            name: "name3",
            description: "description3",
            image: "image3.jpg",
            price: 300}, 
          // {id: 4,
          //   topic: "Popular Topic",
          //   name: "name4",
          //   description: "description4",
          //   image: "image4.jpg",
          //   price: 400}, 
          // {id: 5,
          //   topic: "Popular Topic",
          //   name: "name5",
          //   description: "description5",
          //   image: "image5.jpg",
          //   price: 500}, 
          // {id: 6,
          //   topic: "Popular Topic",
          //   name: "name6",
          //   description: "description6",
          //   image: "image6.jpg",
          //   price: 600},
          // {id: 7,
          //   topic: "Popular Topic",
          //   name: "name7",
          //   description: "description7",
          //   image: "image7.jpg",
          //   price: 700},  
          // {id: 8,
          //   topic: "Popular Topic",
          //   name: "name8",
          //   description: "description8",
          //   image: "image8.jpg",
          //   price: 800},    
          // {id: 9,
          //   topic: "Popular Topic",
          //   name: "name9",
          //   description: "description9",
          //   image: "image9.jpg",
          //   price: 900},  
          // {id: 10,
          //   topic: "Popular Topic",
          //   name: "name10",
          //   description: "description11",
          //   image: "image10.jpg",
          //   price: 1000}                                         

    ]
    
  }

  componentDidMount() {
   this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {   
    if(prevProps.search !== this.props.search) {
      console.log('Search change', this.props.search)
    }
  }
  fetchData = async () => {
    // const res = await request.get('/products?include=main_image')    
    // const data = res.data.data.map(item => {
    //   let image = 'https://via.placeholder.com/300x400.png';
    //   if (item.relationships.main_image) {
    //     const fileId = item.relationships.main_image.data.id
    //     const file = res.data.included.main_images.find(function(el) {
    //       return fileId === el.id;
    //     });
    //     image = file.link.href
    //   }
    //   return {
    //     id: item.id,
    //     name: item.name,
    //     description: item.description,
    //     image: item.image,
    //     price: item.meta.display_price.with_tax.formatted,
    //   }
    // })
    // this.setState({
    //   data,
    // })
  }

  filterProduct = async () => { 
    // const res = await request.get('/products?filter=like(name,*' + this.props.search.trim() +'*)')  
    // const data = res.data.data.map(item => {
    //   let image = 'https://via.placeholder.com/300x400.png';
    //   if (item.relationships.main_image) {
    //     const fileId = item.relationships.main_image.data.id
    //     const file = res.data.included.main_images.find(function(el) {
    //       return fileId === el.id;
    //     });
    //     image = file.link.href
    //   }
    //   return {
    //     id: item.id,
    //     name: item.name,
    //     description: item.description,
    //     image: item.image,
    //     price: item.meta.display_price.with_tax.formatted,
    //   }
    // })
    // this.setState({
    //   data,
    // })
  }

  render() {
    const { data } = this.state
    console.log(data)
    return (
      <Box
        direction="column"
        pad="small"
        fill
      >
         <Box
          direction="row"
          align="center">
            <Box pad="small" style={{width:1300, }} > 
              Popular Topic      
            </Box> 
            <Box pad="small" direction="row" style={{width:300, }} > 
              <Box pad="small"> 
                <Previous/> 
              </Box> 
              <Box pad="small">  
                <Next/>
              </Box>
              <Box pad="small">  
                <a href="">View All</a> 
              </Box>      
            </Box>  
        </Box>     
        <Box
          pad="small"
          direction="row"
          fill
          wrap
          overflow="auto"
        >
          {
            data.map((product) => (
              <ProductItem {...product} />
            ))
          }
        </Box>
      </Box>
    )
  }
}

export default ProductList