import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Macro = {
  current: number;
  target: number;
};

type MacroPillCardProps = {
  protein: Macro;
  carbs: Macro;
  fat: Macro;
};

const MacroPill = ({
  label,
  value,
  progress,
  color,
}: {
  label: string;
  value: number;
  progress: number;
  color: string;
}) => (
  <View style={styles.pillWrapper}>
    <View style={styles.pillContainer}>
      <View style={[styles.pillFill, { height: `${progress}%`, backgroundColor: color }]} />
    </View>
    <Text style={styles.pillValue}>{value}g</Text>
    <Text style={styles.pillLabel}>{label}</Text>
  </View>
);

export function MacroPillCard({ protein, carbs, fat }: MacroPillCardProps) {
  // Cap progress at 100%
  const proteinProgress = protein.target > 0 ? Math.min((protein.current / protein.target) * 100, 100) : 0;
  const carbsProgress = carbs.target > 0 ? Math.min((carbs.current / carbs.target) * 100, 100) : 0;
  const fatProgress = fat.target > 0 ? Math.min((fat.current / fat.target) * 100, 100) : 0;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Macros</Text>
      <View style={styles.pillsContainer}>
        <MacroPill
          label="Protein"
          value={protein.current}
          progress={proteinProgress}
          color="#34d399" // Emerald-400
        />
        <MacroPill
          label="Carbs"
          value={carbs.current}
          progress={carbsProgress}
          color="#fbbf24" // Amber-400
        />
        <MacroPill
          label="Fat"
          value={fat.current}
          progress={fatProgress}
          color="#fb7185" // Rose-400
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1, // Takes up half the row
    backgroundColor: '#1f2937', // Gray-800
    borderRadius: 16,
    padding: 16,
    minHeight: 180, // Consistent height with CaloriesCard
  },
  title: {
    color: '#d1d5db', // Gray-300
    fontSize: 16,
    marginBottom: 8, // Reduce margin to match image
  },
  pillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute evenly
    alignItems: 'flex-end', // Align to the bottom of the container
    flex: 1, // Takes available vertical space
    paddingHorizontal: 5, // Small padding for spacing from edges
  },
  pillWrapper: {
    alignItems: 'center',
    marginBottom: 10, // Space for values and labels
  },
  pillContainer: {
    width: 24, // Consistent width
    height: 100, // Taller pill
    backgroundColor: '#374151', // Gray-700
    borderRadius: 12, // Pill shape
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  pillFill: {
    width: '100%',
  },
  pillValue: {
    color: '#f9fafb', // Gray-50
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 14,
  },
  pillLabel: {
    color: '#6b7280', // Gray-500
    fontSize: 12,
    marginTop: 2,
  },
});