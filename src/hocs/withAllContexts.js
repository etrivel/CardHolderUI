import React from "react";
import { BalancePayloadContext } from "../contexts";

const withAllContexts = (Component) => (props) => {
  const balancePayload = React.useContext(BalancePayloadContext);

  return (
    <Component {...props} balancePayload={balancePayload}>
      {props.children}
    </Component>
  );
};

export default withAllContexts;