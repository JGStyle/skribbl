// playground

import { useState } from "react";

const isBrowser = typeof window !== "undefined";
const url = "...";
const [wsInstance] = useState(() => (isBrowser ? new WebSocket(url) : null));

export default wsInstance;
