import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading || !game) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
