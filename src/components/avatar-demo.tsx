import React, { useState, useRef } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function AvatarComponent() {
  const [imageSrc, setImageSrc] = useState<string>("https://www.clipartmax.com/png/middle/214-2143742_individuals-whatsapp-profile-picture-icon.png")
  const [size, setSize] = useState<number>(100)
  const [isResizing, setIsResizing] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) {
      const newSize = Math.max(50, Math.min(300, size + e.movementX))
      setSize(newSize)
    }
  }

  const handleMouseUp = () => {
    setIsResizing(false)
  }

  React.useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove as unknown as EventListener)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove as unknown as EventListener)
    }
  }, [isResizing, size])

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar 
              className="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80"
              style={{ width: '100%', height: '100%' }}
              onClick={() => inputRef.current?.click()}
            >
              <AvatarImage src={imageSrc} alt="User avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to upload</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      <div 
        className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-bl cursor-se-resize"
        onMouseDown={handleMouseDown}
      />
    </div>
  )
}