import {configure} from '@storybook/react';
import '../src/index.scss';
configure(require.context('../src/', true, /\.stories\.tsx$/), module);
