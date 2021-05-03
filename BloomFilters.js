// ref for bloom filter package https://github.com/Callidon/bloom-filters
import { BloomFilter, PartitionedBloomFilter } from 'bloom-filters'
// Bloom filter, first argument is the m (size) and it is changed according to the task of question, where second argument is k
let filter = new BloomFilter(65536, 4)
// Partioned bloom filter
let filter2 = new PartitionedBloomFilter(65536, 4)

// number of items were obtained from formula based on size, number of hash functions and fp rate = 0.1
// adding items
for (let index = 0; index < 6229; index++) {
  filter.add('' + index)
  filter2.add('' + index)
}

// checking for the number of false positives
let current
let falsePositive = 0
let tries = 0
for (let i = 5000; i < 10000; i++) {
  tries++
  current = i
  // here is filter or filter2 for checking, changed based on task
  const has = filter2.has('' + current, true)
  if (has) falsePositive++
}
// results
console.log('False Positives: ', falsePositive);
const rate = falsePositive / tries
console.log('FP rate: ', rate);