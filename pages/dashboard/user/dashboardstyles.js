import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabsContainer: {
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', // Background color for tabs section
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    top: 70,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    backgroundColor: '#007AFF', // Blue color for floating action button
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
  },
  fabText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
