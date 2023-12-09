import { Box } from '@mui/material';

const appTitle = import.meta.env.VITE_APP_TITLE;

export default function Home() {
  return <Box>{appTitle}</Box>;
}
