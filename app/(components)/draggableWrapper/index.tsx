"use client";

import Draggable from "react-draggable";

const DraggableWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Draggable>{children}</Draggable>;
};

export default DraggableWrapper;
