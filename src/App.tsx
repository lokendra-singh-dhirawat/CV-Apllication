import { useState } from 'react';
import { Button } from "@/components/ui/button"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { AvatarComponent } from './components/avatar-demo';
function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  
  const [startDate, setStartDate] = React.useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = React.useState<Date | undefined>(undefined)

  const handleSelect = (date: Date | undefined, calendarIndex: number) => {
    if (calendarIndex === 0) {
      setStartDate(date)
      if (endDate && date && date > endDate) {
        setEndDate(undefined)
      }
    } else {
      setEndDate(date)
      if (startDate && date && date < startDate) {
        setStartDate(undefined)
      }
    }
  }

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${format(startDate, "LLL dd, y")} - ${format(endDate, "LLL dd, y")}`
    } else if (startDate) {
      return `${format(startDate, "LLL dd, y")} - ...`
    } else if (endDate) {
      return `... - ${format(endDate, "LLL dd, y")}`
    }
    return "Pick a date range"
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"        
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !startDate && !endDate && "text-muted-foreground"
            )}
          >            
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDateRange()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start" id='calender_popup'>
          <div className="flex">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={(date) => handleSelect(date, 0)}
              initialFocus
            />
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={(date) => handleSelect(date, 1)}
              initialFocus
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}


// resume component for input
function Resume(){
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [name,setname] = useState("");
  const [about,setabout] = useState("");
  const [company,setcompany] = useState("");
  const [pastExperience,setpastExperience] = useState("");
  const [AboutCompany,setAboutCompany] = useState("");
  const [refrenceCompany,setrefrenceCompany] = useState("");
  const [jobPosition,setjobPosition] = useState("");
  const [refrencePerson,setrefrencePerson] = useState("");
  const [refrencePhone,setrefrencePhone] = useState("");
  const [refrenceEmail,setrefrenceEmail] = useState("");
  const [refrenceAddress,setrefrenceAddress] = useState("");

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
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setname(event.target.value);
  }
  function handleAboutChange(event: React.ChangeEvent<HTMLInputElement>) {
    setabout(event.target.value);
  }
  function handleCompanyChange(event: React.ChangeEvent<HTMLInputElement>) {
    setcompany(event.target.value);
  }
  function handleExperienceChange(event: React.ChangeEvent<HTMLInputElement>) {
    setpastExperience(event.target.value);
  }
  function handleAboutCompanyChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAboutCompany(event.target.value);
  }
  function handleRefrenceCompanyChange(event: React.ChangeEvent<HTMLInputElement>) {
    setrefrenceCompany(event.target.value);
  }
  function handleJobPositionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setjobPosition(event.target.value);
  }
  function handleRefrencePersonChange(event: React.ChangeEvent<HTMLInputElement>) {
    setrefrencePerson(event.target.value);
  }
  function handleRefrencePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setrefrencePhone(event.target.value);
  }
  function handleRefrenceEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setrefrenceEmail(event.target.value);
  }
  function handleRefrenceAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    setrefrenceAddress(event.target.value);
  }
  return (
    <>
< div className='cards'>
      <div className='header'>
      <h3>Make Your Resume With Us</h3>
      </div>

{/* putting it in card dropdown */}
<div className='personal_details'>
       <h1>Personal Details</h1>
       <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && (
  <div>
    <div className='set1'>
      <h2>Name</h2>
      <input type="text" placeholder="name" 
      value={name} 
      onChange={handleNameChange}
      />
    </div>
    <div className='set1'>
      <h2>About You</h2>
      <input type="text" placeholder="about you" 
      value={about}
      onChange={handleAboutChange}/>
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
        <input type="text"  placeholder='Companies you worked on'
              value={pastExperience}
              onChange={handleExperienceChange}/>
      </div>
</div>)}
</div>   

<div className='refrence'>
  <h1>Reference</h1>
  <button onClick={handleMoreClick3}>
        {showMore3 ? 'Hide' : 'Show'} details
      </button>
  {showMore3 && (
    <div> 
      <div className="set3">
      <h2>Name</h2>
     <input type="text" placeholder='person name' 
     value={refrencePerson}
     onChange={handleRefrencePersonChange}/>
      </div>

      <div className='set3'>
    <h2>Company Name</h2>
     <input type="text" placeholder='name of company' 
     value={refrenceCompany}
     onChange={handleRefrenceCompanyChange}/>
      </div>
  
    <div className='set3'>
    <h2>Position</h2>
     <input type="text" placeholder='job position' 
     value={jobPosition}
     onChange={handleJobPositionChange}/>
      </div>

  <div className='set3'>
    <h2>Email</h2>
     <input type="text" placeholder='email' 
     value={refrenceEmail}
     onChange={handleRefrenceEmailChange}/>
  </div>

  <div className='set3'>
    <h2>Phone Number</h2>
    <input type="text" placeholder='phone Number'
    value={refrencePhone} 
    onChange={handleRefrencePhoneChange} />
  </div>

  <div className='set3'>
      <h2>Address</h2>
      <input type="text" placeholder='address' 
      value={refrenceAddress}
      onChange={handleRefrenceAddressChange}/>
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
    <input type="text" placeholder='present company name'
          value={company} 
          onChange={handleCompanyChange}/>
  </div>

<div className='set4'>
  <h2>Date</h2>
  <div className='date'>
    <DatePickerWithRange />
    </div>
 
</div>

  <div className='set4'>
    <h2>About your company</h2>
    <input type="text" placeholder='about your company'
          value={AboutCompany} 
          onChange={handleAboutCompanyChange}/>
  </div>
      </div>
  )}
  
</div>

</div>

<div className='submit'>
<Button variant="outline">
      Submit
    </Button>
</div >

<div className="resume_whole">
<div className="resume_output"> 

<div className="left_section">
  <div className="Left_image">
  <AvatarComponent />
    </div>

</div>

<div className='right_section'>

 <div className="top-right_part">
  <div className="about">
  <h1>{name}</h1> 
  {about} <br />
  </div> 
 
 <h1>Experience</h1> 
<div className="Exp1">
<em><p className='Bold'>15 september 2017- 20 march 2019</p></em>
<em><p className='Bold'>Company - {company} </p></em>  
</div>
 <div className="Exp2">
 {pastExperience} 
 </div>
 <div className="Exp3">
 {AboutCompany} 
 </div>
  <h1>Reference</h1> 
<div className="Resume_reference">  
  <div className="first3">
  <div className='bottom_part1'>{refrencePerson}</div>
 <div className="bottom_part2"><p>{jobPosition} , {refrenceCompany}</p></div>
<div className='bottom_part3'> {refrencePhone} <br /> </div>
  </div>

<div className="last2">
<div className="bottom_part4">{refrenceEmail} <br /></div>
<div className="bottom_part5"> {refrenceAddress} <br /></div>
</div>

</div>

 </div>

</div>

</div>
</div>

</>
  )
}


function App() {
  return (
      <> 
         <div className='resume_input_fnc'>
        <Resume />
      </div>
      
    </>
      
  );
}

export default App;


