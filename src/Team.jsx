import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const Team = (props) => {
  const {
    name,
    url,
    score,
    setScore,
  } = props;

  return (
    <View>
      <TextInput
        label={name}
        value={score.toString()}
        keyboardType="number-pad"
        returnKeyType="done"
        onChangeText={
          (text) => {
            if (text.length === 0) {
              setScore(0);
            } else {
              setScore(parseInt(text, 10));
            }
          }

        }
      />
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
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default Team;
