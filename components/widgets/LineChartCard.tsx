import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

const chartData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      data: [80.5, 80.1, 79.5, 79.2],
      color: (opacity = 1) => `rgba(52, 211, 153, ${opacity})`, // Emerald-400
      strokeWidth: 3,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#1f2937',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#1f2937',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(209, 213, 219, ${opacity})`, // Gray-300
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  decimalPlaces: 1,
};

export function LineChartCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Monthly Stats</Text>
        <FontAwesome name="search" size={18} color="#9ca3af" />
      </View>
      <LineChart
        data={chartData}
        width={screenWidth - 72}
        height={180}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f2937',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#d1d5db',
    fontSize: 16,
  },
  chart: {
    borderRadius: 16,
  },
});