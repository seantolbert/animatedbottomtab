import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FC, useEffect} from 'react';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import {getPathXCenterByIndex} from '../../utils/Path';
import usePath from '../../hooks/usePath';
import {SCREEN_WIDTH} from '../../constants/Screen';

export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const TabItem: FC<TabProps> = ({
  label,
  icon,
  index,
  activeIndex,
  onTabPress,
}) => {
  const {curvedPaths} = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -35 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
        width: ICON_SIZE,
        height: ICON_SIZE,
        transform: [
            
        ]
    }
  });
};
