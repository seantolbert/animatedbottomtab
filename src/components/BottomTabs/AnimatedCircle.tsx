import {StyleSheet, Text, View} from 'react-native';
import {FC} from 'react';
import Animated, {useAnimatedStyle, SharedValue} from 'react-native-reanimated';
import {AnimatedView} from 'react-native-reanimated/lib/typescript/reanimated2/component/View';

type CircleProps = {
  circleX: SharedValue<number>;
};

const circleContainerSize = 50;

const AnimatedCircle: FC<CircleProps> = ({circleX}) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize / 2}],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: '#0ea5s9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
