import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useFetchData } from '../hooks/useFetchData';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';
 
export const ApiScreen = () => {
  const API_URL = 'https://rickandmortyapi.com/api/character';
  const { data, loading, error } = useFetchData(API_URL);
 
  if (loading) return <Loading />;
 
  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error al obtener datos: {error}</Text>
      </View>
    );
  }
 
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.name}
          image={item.image}
          description={`Especie: ${item.species} - Estado: ${item.status}`}
        />
      )}
    />
  );
};
 
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});