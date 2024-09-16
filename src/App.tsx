import { useState } from 'react';
import { Button } from "@/components/ui/button"


"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent id = "calender_popup" className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

function Resume(){
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  function handleMoreClick2() {
    setShowMore2(!showMore2);
  }
  function handleMoreClick3() {
    setShowMore3(!showMore3);
  }
  function handleMoreClick4() {
    setShowMore4(!showMore4);
  }
  return (
    <>
< div className='cards'>
      <div className='header'>
      <h1>Make you resume Easily</h1>
      </div>

{/* putting it in card dropdown */}
<div className='persional_details'>
       <h1>Personal Details</h1>
       <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && (
  <div>
    <div className='set1'>
      <h2>Name</h2>
      <input type="text" placeholder="name" />
    </div>
    <div className='set1'>
      <h2>About You</h2>
      <input type="text" placeholder="about you" />
    </div>
    <div className='set1'>
      <h2>Email</h2>
      <input type="text" placeholder='email' />
    </div>
    <div className='set1'>
      <h2>Phone Number</h2>
      <input type="text" placeholder='phone Number' />
    </div>
  </div>
)}
  
</div>

<div className='proffessional_details'> 
    <h1>Proffessional Details</h1>
    <button onClick={handleMoreClick2}>
        {showMore2 ? 'Hide' : 'Show'} details
      </button>
    {showMore2 && (     
<div>
      <div className='set2'> 
        <h2>Skills</h2>
        <input type="text" placeholder="skills" />
      </div>

      <div className='set2'>
        <h2>Projects</h2>
        <input type="text" placeholder="about your projects"/>
      </div>

      <div className='set2'>
        <h2>Past Experience</h2>
        <input type="text"  placeholder='Companies you worked on'/>
      </div>
</div>)}
</div>   

<div className='refrence'>
  <h1>Refrence</h1>
  <button onClick={handleMoreClick3}>
        {showMore3 ? 'Hide' : 'Show'} details
      </button>
  {showMore3 && (
    <div> 
      <div className='set3'>
    <h2>Name</h2>
     <input type="text" placeholder='name of company and position' />
      </div>
  
  <div className='set3'>
    <h2>Email</h2>
     <input type="text" placeholder='email' />
  </div>

  <div className='set3'>
    <h2>Phone Number</h2>
    <input type="text" placeholder='phone Number' />
  </div>

  <div className='set3'>
      <h2>Address</h2>
      <input type="text" placeholder='address' />
  </div>
  </div>
  )}
 
</div>

<div className='work'>
  <h1>Work Experience</h1>
  <button onClick={handleMoreClick4}>
  {showMore4 ? 'Hide' : 'Show'} details
    </button>
  {showMore4 && (
    <div>
<div className='set4'>
    <h2>Company Name</h2>
    <input type="text" placeholder='present company name'/>
  </div>

<div className='set4'>
  <h2>Date</h2>
  <div className='date'>
    <DatePickerWithRange />
    </div>
 
</div>

  <div className='set4'>
    <h2>About your company</h2>
    <input type="text" placeholder='about your company'/>
  </div>
      </div>
  )}
  
</div>



<div className='submit'>
<Button variant="outline">
      Submit
    </Button>
</div>

</div>
</>
  )
}


function App() {
  return (
      <> 
         <div>
        <Resume />

      </div>
    </>
      
  );
}

export default App;


