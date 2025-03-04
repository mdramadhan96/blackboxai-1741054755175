import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const RecipeList = ({ navigation }) => {
  const [recipes] = useState([
    { 
      id: '1', 
      title: 'Spaghetti Bolognese',
      cuisine: 'Italian',
      time: '45 mins'
    },
    { 
      id: '2', 
      title: 'Chicken Curry',
      cuisine: 'Indian',
      time: '60 mins'
    },
    { 
      id: '3', 
      title: 'Vegetable Stir Fry',
      cuisine: 'Asian',
      time: '30 mins'
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.recipeCard}
            onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}
          >
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeDetail}>{item.cuisine}</Text>
              <Text style={styles.recipeDetail}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  recipeCard: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recipeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeDetail: {
    color: '#666',
    fontSize: 14,
  }
});

export default RecipeList;
