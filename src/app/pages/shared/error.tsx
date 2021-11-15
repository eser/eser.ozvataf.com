import React from "react";

interface ErrorProps {
  message: string;
}

function Error(props: ErrorProps) {
  return (
    <div>
      Hata:
      {props.message}
    </div>
  );
}

export { Error as default };
