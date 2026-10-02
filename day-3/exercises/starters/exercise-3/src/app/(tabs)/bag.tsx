import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ItemList } from '@/components/item-list';
import { Spacing } from '@/constants/theme';
import { useItemList } from '@/hooks/use-item-list';
import { useTheme } from '@/hooks/use-theme';

export default function BagScreen() {
  const theme = useTheme();
  const { data } = useItemList();

  return (
    <SafeAreaView edges={['top']} style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Bag</Text>
      <ItemList items={data?.slice(0, 2) ?? []} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: Spacing.three },
  title: { fontSize: 28, fontWeight: 'bold', paddingVertical: Spacing.two },
});
