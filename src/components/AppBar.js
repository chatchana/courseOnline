import React from 'react'
import { Box, Menu, Heading, TextInput, Text, Button } from "grommet";
import ShoppingCartButton from './ShoppingCartButton';
import { Search } from "grommet-icons";

class AppBar extends React.Component {
  
  render() {
    return (
      <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='white'
        pad={{
          left: 'medium',
          right: 'medium',
          vertical: 'xsmall'
        }}
        elevation='medium'
        style={{ zIndex: '1' }}
      >
        <Box 
          style={{width:900, }} 
           width="medium"
           direction="row"
           margin="xsmall"
           align="center"> 
          <Heading
            level="4"
            margin="xsmall"
            align="center"
          >          
            <Text color="brand">Courses Online</Text>
          </Heading>
          &nbsp;&nbsp;&nbsp;
          <Menu
              dropProps={{ align: { top: "bottom", left: "left" } }}
              label="Categories"
              items={[
                { label: "Business", onClick: () => {} },
                { label: "Design", onClick: () => {} },
                { label: "Development", onClick: () => {} },
                { label: "Finance & Accounting", onClick: () => {} },
                { label: "Health & Fitness", onClick: () => {} },
                { label: "IT & Software", onClick: () => {} },
                { label: "Marketing", onClick: () => {} },
                { label: "Music", onClick: () => {} },
                { label: "Design", onClick: () => {} },
                { label: "Photography", onClick: () => {} },
                { label: "Teaching & Academics", onClick: () => {} }
              ]}
            />
          <Box
            width="medium"
            direction="row"
            margin="xsmall"
            align="center"
            round="small"
            border> 
            <TextInput 
              plain
              placeholder="Seach for anything" />
            <Search color="brand" />
          </Box>
        </Box>  

        <Box style={{width:300, }} direction="row">         
          <Box>
            <ShoppingCartButton />
          </Box>
          &nbsp;&nbsp;  
          <Box
            justify="center"
            align="center"
            height="50px"
            width="115px">
            <Button label="Log In" fill  />
          </Box>
          &nbsp;&nbsp;
          <Box
            justify="center"
            align="center"
            height="50px"
            width="115px">
            <Button label="Sign Up" fill  />
          </Box>
        </Box>  
      </Box>
    )
  }
  
}

export default AppBar
