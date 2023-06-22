import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text paddingY={2}>
          {isRouteErrorResponse(error)
            ? 'This page does not exists.'
            : 'An unexpected error occured.'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
