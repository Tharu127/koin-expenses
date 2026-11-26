export type Item = { id: string; name: string; price: string };
export type Draft = { merchant: string; date: string; category: string; items: Item[]; uri: string };
export type Expense = { id: string; merchant: string; date: string; category: string; total: number };
export const categories = ['Food & Dining', 'Groceries', 'Transport', 'Shopping', 'Other'];
export const initialExpenses: Expense[] = [
 {id:'1',merchant:'Cafe Kumbuk',date:'Today, 10:42 AM',category:categories[0],total:2850},
 {id:'2',merchant:'Keells Super',date:'Yesterday, 6:18 PM',category:categories[1],total:6420},
 {id:'3',merchant:'Uber',date:'Nov 22, 2026',category:categories[2],total:1280},
 {id:'4',merchant:'The Good Market',date:'Nov 21, 2026',category:categories[3],total:3500},
];
export async function extractReceipt(uri: string): Promise<Draft> {
 await new Promise(resolve => setTimeout(resolve, 1200));
 return {uri, merchant:'Cafe Kumbuk', date:'2026-11-24', category:categories[0], items:[{id:'a',name:'Avocado toast',price:'14.00'},{id:'b',name:'Cappuccino',price:'6.50'},{id:'c',name:'Banana pancakes',price:'8.00'}]};
}
