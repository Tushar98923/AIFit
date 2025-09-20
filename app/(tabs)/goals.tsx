import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { CaloriesCard } from '@/components/widgets/CaloriesCard';
import { MacroPillCard } from '@/components/widgets/MacroPillCard';
import { LineChartCard } from '@/components/widgets/LineChartCard';

const macroData = {
  protein: { current: 120, target: 150 },
  carbs: { current: 180, target: 250 },
  fat: { current: 50, target: 65 },
};

export default function GoalsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Your Goals</Text>
        <View style={styles.topRowContainer}>
          <CaloriesCard current={1850} target={2400} />
          <View style={styles.spacer} />
          <MacroPillCard
            protein={macroData.protein}
            carbs={macroData.carbs}
            fat={macroData.fat}
          />
        </View>
        <LineChartCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827', // Gray-900
  },
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f9fafb', // Gray-50
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8, // Added a small margin to separate from the line chart
  },
  spacer: {
    width: 16,
  },
});