import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container-xl'} minH={'150vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(130deg)'} />

          <Text 
          letterSpacing={'widest'}
          lineHeight={'190%'} p={["4", "16"]}
          textAlign={'center'}>
          Lorem, ipsum dolor sit amet consect
          etur adipisicing elit. Quasi maior
          es ab distinctio illum similique,
           
            bis. Suscipit veritatis fugiat t
            empore iusto adipisci odio quos c
            ulpa nobis qui iste harum consec
            tetur id esse facere in molestia
            e eaque aliquid officia, cupidit
            ate illo labore libero. Incidunt
             et eum quaerat minima cupiditat
             e, tempora esse voluptatibus mo
             di id praesentium? Recusandae o
             dio facere facilis eos, cumque ma
             iores adipisc  voluptatibus
              deleniti iure sapiente similique, 
              dolore debitis natus libero minima
               fugiat? Blanditiis debitis excep
               turi fuga voluptas
                magnam dolore!
                </Text>
         
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Night Life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
