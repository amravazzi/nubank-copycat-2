import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet} from 'react-native';
import type {Node} from 'react';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import {Container} from './styles';
import {
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

function Main(): Node {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 7.654,00</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$20,00 recebida de Fulano hoje às 20h.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}

export default Main;
