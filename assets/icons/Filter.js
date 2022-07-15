import Svg, { Path, Ellipse } from 'react-native-svg';

const FilterIcon = (props) => {
  return (
    <Svg
      width='29'
      height='28'
      viewBox='0 0 29 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M6.3335 14L6.3335 4.66667'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <Path
        d='M22.6665 23.3333L22.6665 19.8333'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <Path
        d='M6.3335 23.3333L6.3335 18.6667'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <Path
        d='M22.6665 15.1667L22.6665 4.66667'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <Path
        d='M14.5 8.16667L14.5 4.66667'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <Path
        d='M14.5 23.3333L14.5 12.8333'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <Ellipse
        cx='6.33333'
        cy='16.3333'
        rx='2.33333'
        ry='2.33333'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <Ellipse
        cx='14.4998'
        cy='10.5'
        rx='2.33333'
        ry='2.33333'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <Ellipse
        cx='22.6668'
        cy='17.5'
        rx='2.33333'
        ry='2.33333'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default FilterIcon;
