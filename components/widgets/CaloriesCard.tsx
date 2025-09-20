import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type CaloriesCardProps = {
  current: number;
  target: number;
};

export function CaloriesCard({ current, target }: CaloriesCardProps) {
  const progress = target > 0 ? Math.min(current / target, 1) : 0; // Cap progress at 100%
  const progressHeight = `${progress * 100}%`;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Calories</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFill, { height: progressHeight }]} />
      </View>
      <Text style={styles.currentValue}>{current}</Text>
      <Text style={styles.targetValue}>Goal: {target}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#1f2937', // Gray-800
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    minHeight: 180,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#d1d5db', // Gray-300
    fontSize: 16,
    fontWeight: '600',
  },
  currentValue: {
    color: '#f9fafb', // Gray-50
    fontSize: 28,
    fontWeight: 'bold',
  },
  targetValue: {
    color: '#6b7280', // Gray-500
    fontSize: 14,
  },
  progressBarContainer: {
    width: 32,
    height: 100, // Adjusted for vertical dominance
    backgroundColor: '#374151', // Gray-700
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    marginVertical: 8,
  },
  progressBarFill: {
    width: '100%',
    backgroundColor: '#34d399', // Emerald-400
  },
});