
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples

// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"



function whatCentury(year){
    const century = year.endsWith('00') ? Number(year[0] + year[1]) : Number(year[0] + year[1]) + 1
    
    if (century > 3 && century < 21)      return century + 'th' 
    if (century.toString().endsWith('1')) return century + 'st'
    if (century.toString().endsWith('2')) return century + 'nd'
    if (century.toString().endsWith('3')) return century + 'rd'
      
    return century + 'th'
  }