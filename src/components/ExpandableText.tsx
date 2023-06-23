import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = isExpanded ? children : children.slice(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={2}
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
