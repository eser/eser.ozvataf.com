import React from "react";

// eslint-disable-next-line no-explicit-any
function Error(props: any) {
  return (
    <div>
      Hata:
      {props.message}
    </div>
  );
}

export { Error as default };
