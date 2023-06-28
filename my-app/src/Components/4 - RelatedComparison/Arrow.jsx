import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

function Arrow({
  children, disabled, onClick
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none"
      }}
    >
      {children}
    </button>
  );
}
export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <a className="btn btn-circle">❮</a>
    </Arrow>
  );
}
export function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <a className="btn btn-circle">❯</a>
    </Arrow>
  );
}
