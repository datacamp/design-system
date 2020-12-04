/* eslint-disable filenames/match-exported */
import { Heading, Paragraph } from '@datacamp/waffles-text';
import { colors } from '@datacamp/waffles-tokens';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main css={{ backgroundColor: colors.beige400 }}>
      <Heading as="h1" size={800}>
        Waffles Documentation
      </Heading>
      <Paragraph>This is the new waffles doc site</Paragraph>
    </main>
  );
};

export default Home;
