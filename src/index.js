import React from 'react';
import { createRoot } from 'react-dom/client';
import SideBar from "./components/SideBar/SideBar";

const container = document.getElementById('app');
createRoot(container).render(<SideBar />);

