import { ImageProps, Image } from '@chakra-ui/react';
import meh from '../assets/meh.webp';
import recomanded from '../assets/thumbs-up.webp';
import exceptional from '../assets/target.webp';

interface Props{
    rating:number
}

function Emoji({rating}:Props) {

    if(rating < 3) return null;


    const emojiMap: {[key:number] : ImageProps } = {
        3: {
            src: meh, alt: 'meh', boxSize: '25px'
        },
        4: {
            src: recomanded, alt: 'Recomanded', boxSize: '25px'
        },
        5: {
            src: exceptional, alt: 'Exceptional', boxSize: '25px'
        }
    }

  return (
   <Image {...emojiMap[rating]} marginTop='3' />
    
  )
}

export default Emoji