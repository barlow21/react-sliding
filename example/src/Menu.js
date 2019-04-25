import React from 'react';
import {
  Grid,
  Switch,
  FormControlLabel,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';
// import PropTypes from 'prop-types';

const arrowSizes = [24, 48, 60];
const timeouts = [1000, 2500, 5000];
const sizes = ['60%', '80%', '100%'];
const breakpoints = {
  xs: 6,
  sm: 4,
  md: 4,
  lg: 4,
  xl: 3
};
const Menu = ({ disableIndex, setDisableIndex, arrowSize, setArrowSize, timeout, setTimeout, size, setSize }) => {
  return (
    <Grid container alignItems='center' className='menu'>
      <Grid item {...breakpoints} className='menu-item'>
        <TextField select label='arrowSize' value={arrowSize} onChange={event => setArrowSize(event.target.value)}>
          {arrowSizes.map(option => (
            <MenuItem key={`arrow-size-${option}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item {...breakpoints} className='menu-item'>
        <TextField select label='timeout' value={timeout} onChange={event => setTimeout(event.target.value)}>
          {timeouts.map(option => (
            <MenuItem key={`timeout-${option}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item {...breakpoints} xs={12} className='menu-item'>
        <FormControlLabel
          control={
            <Switch checked={disableIndex} onChange={event => setDisableIndex(event.target.checked)} color='primary' />
          }
          label='disableIndex'
        />
      </Grid>
      <Grid item {...breakpoints} xs={12} sm={12} className='menu-item'>
        <FormControl component='fieldset'>
          <FormLabel component='legend'>height &amp; width</FormLabel>
          <RadioGroup
            row={true}
            aria-label='height &amp; width'
            name='size'
            value={size}
            onChange={event => setSize(event.target.value)}
          >
            {sizes.map(option => (
              <FormControlLabel value={option} control={<Radio color='primary' />} label={`"${option}"`} />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

// Menu.propTypes = {
// }

// Menu.defaultProps = {
// }

export default Menu;
