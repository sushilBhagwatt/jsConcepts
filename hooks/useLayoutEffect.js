import { useState, useRef, useLayoutEffect } from 'react';
//useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
//Calling useLayoutEffect to perform the layout measurements before the browser repaints the screen:

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);
}