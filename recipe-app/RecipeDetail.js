import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const RecipeDetail = ({ route }) => {
  const { recipeId } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - in a real app, this would come from an API or database
  const recipeDetails = {
    '1': {
      title: 'Spaghetti Bolognese',
      cuisine: 'Italian',
      time: '45 mins',
      servings: 4,
      ingredients: [
        '400g spaghetti',
        '500g ground beef',
        '2 cans crushed tomatoes',
        '1 onion, diced',
        '3 cloves garlic, minced',
        'Fresh basil',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Boil water and cook spaghetti according to package instructions',
        'In a large pan, brown the ground beef',
        'Add diced onion and garlic, cook until softened',
        'Add crushed tomatoes and simmer for 20 minutes',
        'Season with salt, pepper, and fresh basil',
        'Serve sauce over cooked spaghetti'
      ]
    },
    '2': {
      title: 'Chicken Curry',
      cuisine: 'Indian',
      time: '60 mins',
      servings: 4,
      ingredients: [
        '600g chicken breast, cubed',
        '2 onions, diced',
        '4 cloves garlic',
        '2 tbsp curry powder',
        '1 can coconut milk',
        'Fresh coriander',
        'Salt to taste'
      ],
      instructions: [
        'Season chicken with salt and curry powder',
        'In a large pot, sauté onions and garlic',
        'Add chicken and cook until browned',
        'Pour in coconut milk and simmer for 30 minutes',
        'Garnish with fresh coriander',
        'Serve with rice'
      ]
    },
    '3': {
      title: 'Vegetable Stir Fry',
      cuisine: 'Asian',
      time: '30 mins',
      servings: 2,
      ingredients: [
        'Mixed vegetables',
        '2 tbsp soy sauce',
        '1 tbsp sesame oil',
        '2 cloves garlic',
        'Ginger, minced',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Prepare all vegetables',
        'Heat sesame oil in a wok',
        'Add garlic and ginger, stir-fry until fragrant',
        'Add vegetables and stir-fry until crisp-tender',
        'Season with soy sauce',
        'Serve hot'
      ]
    }
  };

  const recipe = recipeDetails[recipeId];

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, this would persist to storage
  };

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{recipe.title}</Text>
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <Text style={styles.favoriteButtonText}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>🕒 {recipe.time}</Text>
        <Text style={styles.info}>👥 Serves {recipe.servings}</Text>
        <Text style={styles.info}>🍽️ {recipe.cuisine}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.listItem}>• {ingredient}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        {recipe.instructions.map((step, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteButtonText: {
    fontSize: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
});

export default RecipeDetail;
