import {useState, useEffect} from 'react';
import { usePollinationsImage } from '@pollinations/react';

const AIGeneratedContent = (
  {
    prompt,
  }
) => {
  const imageUrl = usePollinationsImage(prompt, { width: 400, height: 600, seed: 20 });
  const [onload, setLoading] = useState(true)

  console.log(imageUrl)

  useEffect(()=>{
    setLoading(true)
  }, [prompt])

  return (
    <div className='h-[75%] w-full flex justify-center items-center'>
      <div className={
        onload?"block":"hidden"
      }> <div className='bg-blue-700 rounded-full h-16 w-16 animate-ping'></div> </div>
      <img onLoad={()=>{setLoading(false)}} className={
        `lg:h-[450px] lg:w-[300px] md:h-[400px] md:w-[275px] sm:h-[350px] sm:w-[250px] h-[300px] w-[225px] ${onload?"hidden":"block"} `
      } src={imageUrl} alt="AI Generated"/>
    </div>
  );
};

export default AIGeneratedContent;