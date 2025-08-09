import { StyleSheet, View } from 'react-native';
import { CustomButton } from '../../../shared/ui';
import { Info } from '../api';
import { usePaginationStore } from '../store';

type PaginationProps = Partial<Info>;

export default function Pagination({ pages }: PaginationProps) {
  const page = usePaginationStore(state => state.page);
  const nextPage = usePaginationStore(state => state.nextPage);
  const prevPage = usePaginationStore(state => state.prevPage);

  return (
    <View style={styles.buttonsContainer}>
      <CustomButton label="Prev" onPress={prevPage} disabled={page === 1} />
      <CustomButton label="Next" onPress={nextPage} disabled={page === pages} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 24,
  },
});
