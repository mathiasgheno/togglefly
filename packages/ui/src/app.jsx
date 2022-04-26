import * as React from 'react'
import { createRoot } from 'react-dom/client';

let Greet = () => <h1>Hello, world!</h1>

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<Greet />);
