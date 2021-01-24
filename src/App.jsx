import { Grommet, Box, Button } from 'grommet';

export default function App() {
  return (
    <Grommet plain>
      <Box align="center">
        <Button
          as="a"
          href="https://v2.grommet.io/"
          target="_blank"
          rel="noopener noreferrer"
          label="Get Started"
          primary
        />
      </Box>
    </Grommet>
  );
}
