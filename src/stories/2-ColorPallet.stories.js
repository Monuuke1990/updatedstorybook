import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Colorpallet from '../Components/colorpallet.js';


export default {
  title: 'Color Pallet',
  component: Button,
};

export const Allcolorpallet = () => <Colorpallet/>;

