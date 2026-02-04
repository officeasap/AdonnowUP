// src/routes/mineralsRoutes.tsx
import { RouteObject } from 'react-router-dom';
import Minerals from '../pages/Minerals';                     // This is correct
import Smelting from '../pages/minerals/Smelting';           // This is correct
import Tanzanite from '../pages/minerals/Tanzanite';         // This is correct
import GoldNuggets from '../pages/minerals/GoldNuggets';     // This is correct
import GoldBars from '../pages/minerals/GoldBars';           // This is correct
import CopperCathold from '../pages/minerals/CopperCathold'; // This is correct
import Coltant from '../pages/minerals/Coltant';             // This is correct
import Vault from '../pages/minerals/Vault';                 // This is correct
import CommunityDevelopment from '../pages/minerals/CommunityDevelopment'; // This is correct

export const mineralsRoutes: RouteObject[] = [
  {
    path: 'minerals',
    element: <Minerals />,
    children: [
      { path: 'smelting', element: <Smelting /> },
      { path: 'tanzanite', element: <Tanzanite /> },
      { path: 'gold-nuggets', element: <GoldNuggets /> },
      { path: 'gold-bars', element: <GoldBars /> },
      { path: 'copper-cathold', element: <CopperCathold /> },
      { path: 'coltant', element: <Coltant /> },
      { path: 'vault', element: <Vault /> },
      { path: 'community-development', element: <CommunityDevelopment /> }
    ]
  }
];