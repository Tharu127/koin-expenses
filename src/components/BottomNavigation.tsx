
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import {
  Plus,
  Receipt,
  Camera,
  Image as ImageIcon,
  Coffee,
  ShoppingBasket,
  CarFront,
  ShoppingBag,
} from 'lucide-react-native';

import { COLORS } from '../constants/theme';
import BottomNavigation from '../components/BottomNavigation';

const transactions = [
  {
    id: '1',
    name: 'Cafe Kumbuk',
    date: 'Today, 10:42 AM',
    amount: '28.50',
    icon: Coffee,
    background: COLORS.lightGreen,
    color: '#008765',
  },
  {
    id: '2',
    name: 'Keells Super',
    date: 'Yesterday, 6:18 PM',
    amount: '64.20',
    icon: ShoppingBasket,
    background: COLORS.lightPurple,
    color: '#8055B5',
  },
  {
    id: '3',
    name: 'Uber',
    date: 'Nov 22, 2026',
    amount: '12.80',
    icon: CarFront,
    background: COLORS.lightBlue,
    color: COLORS.text,
  },
  {
    id: '4',
    name: 'The Good Market',
    date: 'Nov 21, 2026',
    amount: '35.00',
    icon: ShoppingBag,
    background: COLORS.lightOrange,
    color: '#B77930',
  },
];

export default function ExpensesScreen() {
  const handleCamera = () => {
    Alert.alert('Camera', 'Camera integration coming next.');
  };

  const handleGallery = () => {
    Alert.alert('Gallery', 'Gallery integration coming next.');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>KOIN</Text>
            <Text style={styles.title}>Expenses</Text>
          </View>

          <TouchableOpacity
            style={styles.scanButton}
            onPress={handleCamera}
            activeOpacity={0.8}
          >
            <Plus size={18} color={COLORS.text} />
            <Text style={styles.scanButtonText}>
              Scan Bill
            </Text>
          </TouchableOpacity>
        </View>

        {/* Upload Card */}
        <View style={styles.uploadCard}>
          <View style={styles.receiptIcon}>
            <Receipt size={23} color={COLORS.primaryDark} />
          </View>

          <Text style={styles.uploadTitle}>
            Upload or Snap a Bill
          </Text>

          <Text style={styles.uploadSubtitle}>
            Less typing. More living.
          </Text>

          <View style={styles.uploadActions}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleCamera}
              activeOpacity={0.7}
            >
              <Camera size={17} color={COLORS.text} />
              <Text style={styles.uploadButtonText}>
                Camera
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleGallery}
              activeOpacity={0.7}
            >
              <ImageIcon size={17} color={COLORS.text} />
              <Text style={styles.uploadButtonText}>
                Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activityHeader}>
          <Text style={styles.sectionTitle}>
            Recent Activity
          </Text>
          <Text style={styles.weekText}>This week</Text>
        </View>

        {transactions.map((transaction, index) => {
          const Icon = transaction.icon;

          return (
            <View
              key={transaction.id}
              style={[
                styles.transactionRow,
                index === transactions.length - 1 &&
                  styles.lastRow,
              ]}
            >
              <View
                style={[
                  styles.categoryIcon,
                  { backgroundColor: transaction.background },
                ]}
              >
                <Icon
                  size={22}
                  color={transaction.color}
                  strokeWidth={1.8}
                />
              </View>

              <View style={styles.transactionDetails}>
                <Text style={styles.merchantName}>
                  {transaction.name}
                </Text>
                <Text style={styles.transactionDate}>
                  {transaction.date}
                </Text>
              </View>

              <Text style={styles.amount}>
                ${transaction.amount}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  logo: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: COLORS.primaryDark,
    marginBottom: 4,
  },
  title: {
    fontSize: 29,
    fontWeight: '700',
    color: COLORS.text,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 17,
    height: 42,
    borderRadius: 30,
    gap: 6,
  },
  scanButtonText: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '600',
  },
  uploadCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#91CDB9',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 218,
    padding: 24,
  },
  receiptIcon: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
  },
  uploadSubtitle: {
    fontSize: 13,
    color: COLORS.secondaryText,
    marginTop: 6,
    marginBottom: 13,
  },
  uploadActions: {
    flexDirection: 'row',
    gap: 10,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 17,
    height: 40,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 11,
  },
  uploadButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.text,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 29,
    marginBottom: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
  weekText: {
    fontSize: 11,
    color: COLORS.secondaryText,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    gap: 12,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  categoryIcon: {
    width: 44,
    height: 44,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionDetails: {
    flex: 1,
    gap: 5,
  },
  merchantName: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text,
  },
  transactionDate: {
    fontSize: 11,
    color: COLORS.secondaryText,
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    fontVariant: ['tabular-nums'],
  },
});
