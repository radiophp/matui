import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";


const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DevSupport
            ComponentPreviews={ <ComponentPreviews/> }
            useInitialHook={ useInitial }
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
);



