const DashboardSvg = ({color='#C0BEFF'}) => {
  return(
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='dashboard-svg'>
      <mask id="path-1-inside-1" fill={color}>
        <rect x="8.44336" width="6.56706" height="6.5625" rx="1"/>
      </mask>
      <rect x="8.44336" width="6.56706" height="6.5625" rx="1" stroke={color} strokeWidth="2" mask="url(#path-1-inside-1)"/>
      <mask id="path-2-inside-2" fill={color}>
        <rect x="8.44336" y="7.5" width="6.56706" height="6.5625" rx="1"/>
      </mask>
      <rect x="8.44336" y="7.5" width="6.56706" height="6.5625" rx="1" stroke={color} strokeWidth="2" mask="url(#path-2-inside-2)"/>
      <mask id="path-3-inside-3" fill={color}>
        <rect y="7.5" width="6.56706" height="6.5625" rx="1"/>
      </mask>
      <rect y="7.5" width="6.56706" height="6.5625" rx="1" stroke={color} strokeWidth="2" mask="url(#path-3-inside-3)"/>
      <mask id="path-4-inside-4" fill={color}>
        <rect width="6.56706" height="6.5625" rx="1"/>
      </mask>
      <rect width="6.56706" height="6.5625" rx="1" stroke={color} strokeWidth="2" mask="url(#path-4-inside-4)"/>
    </svg>
  )
}

export default DashboardSvg


