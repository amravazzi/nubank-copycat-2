import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #8b10ae;
  padding-top: ${getStatusBarHeight()}px;
`;
