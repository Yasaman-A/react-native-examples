import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

const Team = (props) => {
  const { name, url } = props;
  return (
    <View>
      <Text>
        {name}:{props.score}
      </Text>
      <Image
        source={{ uri: url }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Team;
