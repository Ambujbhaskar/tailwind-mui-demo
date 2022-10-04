import * as React from 'react';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';


export default function App() {
  return (
    <div className='my-4'>
      <Slider defaultValue={30} className="w-60 mr-4 ml-4" />
      <Slider defaultValue={30} className="text-teal-600 w-80" />
      <Button variant="contained" className='bg-primary p-8 ml-4' >Click me</Button>
      <Button variant="outlined" className='border-primary border-2 text-primary p-8 ml-4' >Click me</Button>
    </div>
  );
}
