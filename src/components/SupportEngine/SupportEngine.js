import Avatar from "./Avatar/Avatar.js";
import SupportWindow from "./SupportWindow/SupportWindow.js";
import styled from "styled-components"
import { useState, useRef, useEffect } from "react";

const SupportEngine = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null)

  const handleVisible = () => {
      if (visible === false) {
          setVisible(true)
      } else {
          setVisible(false)
      }
  }

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
        document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <SupportEngineWrapper ref={ref}>
      <SupportWindow visible={visible} />
      <Avatar handleVisible={handleVisible} />
    </SupportEngineWrapper>
  );
};

const SupportEngineWrapper = styled.div`

`

export default SupportEngine;
