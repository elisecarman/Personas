import React, { forwardRef } from 'react'
import "../App.css"

interface SectionProps{
    first : boolean
    children: React.ReactNode
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ first, children }, ref) => {    
    return (

        <div ref={ref} className={first ? "section-first" : "section"}>
        {children}
        </div>
    );
  });

export default Section