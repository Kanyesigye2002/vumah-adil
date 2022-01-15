// material
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function PageNotFoundIllustration({ ...other }) {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <Box {...other}>
      <svg id="mastercard-color_large" xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 48 32">
        <rect id="card_bg" width="48" height="32" rx="4" fill="#f2f0ec" />
        <g id="mastercard" transform="translate(4 3)">
          <g id="Group" opacity="0">
            <rect id="Rectangle" width="38.71" height="25.6" transform="translate(0.65 0.2)" fill="#fff" />
          </g>
          <rect id="Rectangle-2" width="10.21" height="16.68" transform="translate(14.9 4.66)" fill="#f26122" />
          <path
            id="Path"
            d="M13.169,10.61a10.58,10.58,0,0,1,4-8.34,10.61,10.61,0,1,0,0,16.68A10.58,10.58,0,0,1,13.169,10.61Z"
            transform="translate(2.831 2.39)"
            fill="#ea1d25"
          />
          <path
            id="Shape"
            d="M.5.411H.43V0h.1L.66.29.78,0h.1V.409H.81V.1L.7.37H.62L.5.1V.41ZM.2.41H.14V.07H0V0H.35V.07H.2V.409Z"
            transform="translate(35.94 19.16)"
            fill="#f69e1e"
          />
          <path
            id="Path-2"
            d="M17.16,10.6A10.61,10.61,0,0,1,0,18.943,10.61,10.61,0,0,0,1.78,4.053,10.4,10.4,0,0,0,0,2.263,10.61,10.61,0,0,1,17.16,10.6Z"
            transform="translate(20 2.397)"
            fill="#f69e1e"
          />
        </g>
      </svg>
    </Box>
  );
}
